import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  function addProduct(product) {
    const existing = items.value.find(
      item => item.id === product.id
    )

    if (existing) {
      if (existing.quantity < product.stock) {
        existing.quantity++
      }

      return
    }

    items.value.push({
      ...product,
      quantity: 1
    })
  }

  function removeProduct(productId) {
    items.value = items.value.filter(
      item => item.id !== productId
    )
  }

  function increase(productId) {
    const item = items.value.find(
      item => item.id === productId
    )

    if (item && item.quantity < item.stock) {
      item.quantity++
    }
  }

  function decrease(productId) {
    const item = items.value.find(
      item => item.id === productId
    )

    if (!item) return

    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeProduct(productId)
    }
  }

  function clearCart() {
    items.value = []
  }

  const totalItems = computed(() =>
    items.value.reduce(
      (total, item) => total + item.quantity,
      0
    )
  )

  const totalPrice = computed(() =>
    items.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  )

  return {
    items,
    addProduct,
    removeProduct,
    increase,
    decrease,
    clearCart,
    totalItems,
    totalPrice
  }
})