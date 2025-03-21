<template>
  <article class="cart-item">
    <div class="item-container">
      <p class="item-title">{{ item.name }}</p>
      <div class="item-values">
        <span class="item-quantity">{{ item.quantity }}x</span>
        <span class="item-price"> {{ unitValue }}</span>
        <span class="item-total">{{ totalCost }} </span>
      </div>
    </div>
    <div class="item-icon" @click="removeProduct(item.id)">
      <RemoveItemIcon />
    </div>
  </article>
</template>

<script>
import { formatCurrency } from '@/utils/formatters'
import RemoveItemIcon from '@/assets/images/icon-remove-item.svg?component'
import { useCart } from '@/stores/cart'
import { mapState } from 'pinia'

export default {
  name: 'ShoppingCartItem',
  components: { RemoveItemIcon },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(useCart, ['cart', 'removeItem']),

    unitValue() {
      return `@ ${formatCurrency(this.item.price)}`
    },
    totalCost() {
      return `${formatCurrency(this.item.quantity * this.item.price)}`
    },
  },
  methods: {
    removeProduct(itemId) {
      this.removeItem(itemId)
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--rose-100);
  font-size: 14px;

  .item {
    &-container {
      min-width: 170px;
    }

    &-values {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &-icon {
      border: 2px solid var(--rose-300);
      border-radius: 50%;
      padding: 0 4px;
      transition: all 0.2s ease;

      &:hover {
        border: 2px solid var(--rose-900);
        cursor: pointer;
        :deep(path) {
          fill: var(--rose-900);
        }
      }
    }
  }
}
</style>
