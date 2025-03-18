import { defineStore } from 'pinia'

export const useCart = defineStore('cart', {
  state: () => {
    return {
      cart: [],
    }
  },
  actions: {
    addItem(item) {
      item = { ...item, quantity: 1 }
      this.cart.push(item)
    },
    incrementItem(item) {
      const cartItem = this.cart.find((cartItem) => cartItem.id === item.id)
      if (cartItem) {
        cartItem.quantity++
      }
    },
    decrementItem(item) {
      const cartItem = this.cart.find((cartItem) => cartItem.id === item.id)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        // Remove item if quantity would become 0
        this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id)
      }
    },
    removeItem(item) {
      this.cart.filter((cartItem) => cartItem.id !== item.id)
    },
  },
  getters: {
    totalItems: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    orderTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
})
