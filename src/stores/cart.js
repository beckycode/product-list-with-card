import { defineStore } from 'pinia'

export const useCart = defineStore('cart', {
  state: () => {
    // Load initial state from localStorage
    const savedCart = localStorage.getItem('cart')
    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
    }
  },
  actions: {
    saveToStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    addItem(item) {
      item = { ...item, quantity: 1 }
      this.cart.push(item)
      this.saveToStorage()
    },
    incrementItem(item) {
      const cartItem = this.cart.find((cartItem) => cartItem.id === item.id)
      if (cartItem) {
        cartItem.quantity++
        this.saveToStorage()
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
      this.saveToStorage()
    },
    removeItem(itemId) {
      this.cart = [...this.cart.filter((cartItem) => cartItem.id !== itemId)]
      this.saveToStorage()
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
