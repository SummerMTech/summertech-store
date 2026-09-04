<script setup>
import { computed, ref } from 'vue'

import ProductCard from '../components/ProductCard.vue'
import ProductModal from '../components/ProductModal.vue'

import { products } from '../data/products'


const search = ref('')
const selectedCategory = ref('Todos')


// Producto actualmente seleccionado
const selectedProduct = ref(null)


// Abrir ventana del producto
function openProduct(product) {
  selectedProduct.value = product
}


// Cerrar ventana del producto
function closeProduct() {
  selectedProduct.value = null
}


// Categorías
const categories = computed(() => [
  'Todos',
  ...new Set(
    products.map(product => product.category)
  )
])


// Productos filtrados
const filteredProducts = computed(() => {

  const query = search.value
    .toLowerCase()
    .trim()

  return products.filter(product => {

    const categoryMatch =
      selectedCategory.value === 'Todos' ||
      product.category === selectedCategory.value

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(query) ||

      product.description
        .toLowerCase()
        .includes(query)

    return categoryMatch && searchMatch
  })
})
</script>

<template>

  <main class="store">

    <section class="store-header">

      <div class="store-title">

        <span class="eyebrow">
          SUMMERTECH STORE
        </span>

        <h1>
          Componentes para construir.
        </h1>

        <p>
          Electrónica, módulos y sensores para llevar
          tus ideas del prototipo a la realidad.
        </p>

      </div>

      <div class="search-box">

        <span>⌕</span>

        <input
          v-model="search"
          type="search"
          placeholder="Buscar componentes..."
        />

      </div>

    </section>


    <section class="catalog">

      <aside class="filters">

        <h3>Categorías</h3>

        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="{
            active: selectedCategory === category
          }"
        >
          {{ category }}
        </button>

      </aside>


      <section class="products-section">

        <div class="products-header">

          <div>
            <strong>
              {{ filteredProducts.length }}
            </strong>

            productos
          </div>

          <span v-if="search">
            Resultados para "{{ search }}"
          </span>

        </div>


        <div
          v-if="filteredProducts.length"
          class="product-grid"
        >

          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @select="openProduct"
          />

        </div>


        <div
          v-else
          class="no-results"
        >

          <div class="no-results-icon">
            🔍
          </div>

          <h3>
            No encontramos ese componente
          </h3>

          <p>
            Intenta buscar con otro término.
          </p>

        </div>

      </section>

    </section>

  </main>
  <ProductModal
    v-if="selectedProduct"
    :product="selectedProduct"
    @close="closeProduct"
  />

</template>