<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/Cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const cart = useCartStore()

const selectedImage = ref(0)

function addToCart() {
  cart.addProduct(props.product)
}

function closeModal() {
  emit('close')
}
</script>

<template>

  <div
    class="product-modal-overlay"
    @click.self="closeModal"
  >

    <div class="product-modal">

      <!-- BOTÓN CERRAR -->

      <button
        class="modal-close"
        @click="closeModal"
      >
        ×
      </button>


      <!-- CONTENIDO -->

      <div class="modal-content">


        <!-- GALERÍA -->

        <section class="product-gallery">

          <div class="main-product-image">

            <img
              :src="product.images[selectedImage]"
              :alt="product.name"
            />

          </div>


          <div class="product-thumbnails">

            <button
              v-for="(image, index) in product.images"
              :key="image"
              :class="{
                selected: selectedImage === index
              }"
              @click="selectedImage = index"
            >

              <img
                :src="image"
                :alt="`${product.name} imagen ${index + 1}`"
              />

            </button>

          </div>

        </section>


        <!-- INFORMACIÓN -->

        <section class="product-details">

          <span class="modal-category">
            {{ product.category }}
          </span>

          <h2>
            {{ product.name }}
          </h2>

          <p class="modal-description">
            {{ product.description }}
          </p>


          <div class="modal-price">

            Bs {{ product.price.toFixed(2) }}

          </div>


          <!-- ESPECIFICACIONES -->

          <div class="specifications">

            <h3>
              Información clave
            </h3>

            <div class="spec-grid">

              <div
                v-for="(value, key) in product.specifications"
                :key="key"
                class="spec-item"
              >

                <span>
                  {{ key }}
                </span>

                <strong>
                  {{ value }}
                </strong>

              </div>

            </div>

          </div>


          <!-- PROYECTOS -->

          <div class="projects">

            <h3>
              Proyectos comunes
            </h3>

            <div class="project-list">

              <span
                v-for="project in product.projects"
                :key="project"
              >
                {{ project }}
              </span>

            </div>

          </div>


          <!-- CONSULTOR IA -->

          <div class="ai-consultant">

            <div class="ai-header">

              <span class="ai-icon">
                ✦
              </span>

              <div>
                <strong>
                  Consultor SummerTech
                </strong>

                <small>
                  Pregunta sobre este componente
                </small>
              </div>

            </div>


            <div class="ai-input">

              <input
                type="text"
                :placeholder="`¿Qué quieres saber sobre ${product.name}?`"
              />

              <button>
                →
              </button>

            </div>

          </div>


          <!-- CARRITO -->

          <button
            class="add-to-cart-modal"
            :disabled="product.stock <= 0"
            @click="addToCart"
          >

            {{
              product.stock > 0
                ? '+ Agregar al carrito'
                : 'Producto agotado'
            }}

          </button>

        </section>

      </div>

    </div>

  </div>

</template>