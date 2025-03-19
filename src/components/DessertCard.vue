<template>
  <article class="card">
    <div class="card-header">
      <div class="card-image" :class="{ selected: isInCart }">
        <img :src="getImageURL" :alt="dessert.name" />
      </div>
      <ButtonActions
        class="button-add"
        :dessert="dessert"
        :isInCart="isInCart"
        @addToCart="addToCart"
        @increment="increment"
        @decrement="decrement"
      />
    </div>

    <div class="card-content">
      <p class="card-category">{{ dessert.category }}</p>
      <h4 class="card-name">{{ dessert.name }}</h4>
      <p class="card-price">{{ price }}</p>
    </div>
  </article>
</template>

<script>
import { formatCurrency } from '@/utils/formatters'
import ButtonActions from './ButtonActions.vue'
import { useCart } from '@/stores/cart'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'DessertCard',
  components: {
    ButtonActions,
  },
  props: {
    dessert: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(useCart, ['cart']),
    getImageURL() {
      return this.dessert.image.desktop
    },
    price() {
      return formatCurrency(this.dessert.price)
    },
    isInCart() {
      return this.cart.some((item) => item.id === this.dessert.id)
    },
  },
  methods: {
    ...mapActions(useCart, ['addItem', 'incrementItem', 'decrementItem']),
    addToCart() {
      this.addItem(this.dessert)
    },
    increment() {
      console.log('increment')

      this.incrementItem(this.dessert)
    },
    decrement() {
      this.decrementItem(this.dessert)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
    @media (max-width: 1024px) {
      max-height: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 1440px) {
        object-fit: contain;
      }
      @media (max-width: 920px) {
        object-fit: cover;
      }
    }
  }

  &-content {
    margin-top: 10px;
  }
  &-category {
    color: var(--rose-500);
  }

  &-price {
    color: var(--primary-red);
    font-weight: 600;
  }

  .button-add {
    margin-top: -20px;
  }

  .selected {
    border: 3px solid var(--primary-red);
  }
}
</style>
