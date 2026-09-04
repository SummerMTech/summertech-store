<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'

const route = useRoute()

const product = computed(() =>
  products.find(
    item => item.id === Number(route.params.id)
  )
)
</script>

<template>

  <main class="product-page">

    <div v-if="product">

      <span class="category">
        {{ product.category }}
      </span>

      <h1>
        {{ product.name }}
      </h1>

      <p>
        {{ product.description }}
      </p>

      <strong>
        Bs {{ product.price.toFixed(2) }}
      </strong>

    </div>

    <div v-else>
      Producto no encontrado.
    </div>

  </main>

</template>