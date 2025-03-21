<template>
  <div class="modal-overlay" @click.self="$emit('closeOnly')">
    <div class="modal">
      <IconOrderConfirmed />
      <div class="modal-header">
        <h1 class="modal-title">Order Confirmed</h1>
        <p class="modal-message">We hope you enjoy your food</p>
      </div>
      <div class="modal-content">
        <OrderItem v-for="cartItem in cart" :key="cartItem.id" :item="cartItem" />

        <div class="modal-footer">
          <p>Order Total</p>
          <p class="accent price">{{ price }}</p>
        </div>
      </div>
      <div class="modal-actions">
        <BaseButton label="Start New Order" @click="resetCart" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { useCart } from '@/stores/cart'
import { mapState } from 'pinia'
import IconOrderConfirmed from '@/assets/images/icon-order-confirmed.svg?component'
import OrderItem from './OrderItem.vue'
import { formatCurrency } from '@/utils/formatters'

export default {
  name: 'OrderModal',
  components: {
    BaseButton,
    IconOrderConfirmed,
    OrderItem,
  },
  emits: ['close', 'closeOnly'],
  computed: {
    ...mapState(useCart, ['cart', 'orderTotal']),
    price() {
      return formatCurrency(this.orderTotal)
    },
  },
  methods: {
    resetCart() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: var(--rose-50);
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;

  &-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  &-message {
    color: var(--rose-400);
    margin-top: 10px;
  }
  &-content {
    text-align: center;
    margin: 30px 0;
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-background);
    padding: 30px;

    .price {
      font-size: 20px;

      @media (max-width: 920px) {
        font-size: 26px;
      }
    }
  }

  &-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
