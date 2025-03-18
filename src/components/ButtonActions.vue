<template>
  <div v-if="!isInCart" class="button" @click="$emit('addToCart')">
    <div class="icon-cart">
      <CartIcon />
    </div>
    <p class="button-label">Add to Cart</p>
  </div>
  <div v-else class="button button-selected">
    <div class="action" @click="$emit('decrement')">
      <DecrementIcon />
    </div>
    {{ totalItemCart }}
    <div class="action" @click="$emit('increment')">
      <IncrementIcon />
    </div>
  </div>
</template>

<script>
import CartIcon from '@/assets/images/icon-add-to-cart.svg?component'
import IncrementIcon from '@/assets/images/icon-increment-quantity.svg?component'
import DecrementIcon from '@/assets/images/icon-decrement-quantity.svg?component'
import { useCart } from '@/stores/cart'
import { mapState } from 'pinia'

export default {
  name: 'ButtonActions',
  components: {
    CartIcon,
    IncrementIcon,
    DecrementIcon,
  },
  props: {
    dessert: {
      type: Object,
      required: true,
    },
    isInCart: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(useCart, ['cart']),
    totalItemCart() {
      return this.cart.find((item) => item.id === this.dessert.id).quantity
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  padding: 10px;
  background-color: var(--rose-50);
  border: 1px solid var(--rose-500);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary-red);
    cursor: pointer;
    border: 1px solid var(--primary-red);
  }

  &-label {
    font-weight: 600;
  }

  .icon-cart {
    margin-right: 5px;
  }

  &-selected {
    background-color: var(--primary-red);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 15px;
    color: var(--color-text-light);
    border: 1px solid var(--primary-red);

    &:hover {
      color: var(--color-text-light);
    }

    .action {
      border: 2px solid var(--rose-50);
      border-radius: 12px;
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease;

      &:hover {
        background-color: var(--color-background);
        :deep(path) {
          fill: var(--primary-red);
        }
      }

      &:first-child {
        padding: 8px 5px;
      }
    }
  }
}
</style>
