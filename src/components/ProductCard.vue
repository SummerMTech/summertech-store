<script setup>
import { useCartStore } from '../stores/Cart'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['select'])

const cart = useCartStore()
</script>

<template>

  <article class="product-card">

    <button
      class="product-image"
      @click="emit('select', product)"
    >

      <img
        :src="product.image"
        :alt="product.name"
      />

    </button>


    <div class="product-info">

      <span class="category">
        {{ product.category }}
      </span>


      <button
        class="product-name"
        @click="emit('select', product)"
      >
        <h3>
          {{ product.name }}
        </h3>
      </button>


      <p>
        {{ product.description }}
      </p>


      <div class="product-bottom">

        <strong>
          Bs {{ product.price.toFixed(2) }}
        </strong>

        <button
          :disabled="product.stock <= 0"
          @click.stop="cart.addProduct(product)"
        >
          {{
            product.stock > 0
              ? '+ Carrito'
              : 'Agotado'
          }}
        </button>

      </div>

    </div>

  </article>

</template>