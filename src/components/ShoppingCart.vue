<template>
  <section class="shopping-cart">
    <h3 class="title">Your cart ({{ totalItems }})</h3>
    <article v-if="totalItems === 0" class="empty-cart">
      <img src="./../assets/images/illustration-empty-cart.svg" alt="Empty cart" />
      <p>Your added items will appear here</p>
    </article>
    <article v-else class="products">
      <p class="order-total">
        Order Total <span class="price accent">{{ price }}</span>
      </p>
      <div class="disclaimer">
        <CarbonNeutralIcon />
        <p>This is a <span class="accent">carbon-neutral</span> dellivery</p>
      </div>
      <BaseButton label="Confirm Order" />
    </article>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { useCart } from '@/stores/cart'
import { mapState } from 'pinia'
import { formatCurrency } from '@/utils/formatters'
import CarbonNeutralIcon from '@/assets/images/icon-carbon-neutral.svg?component'

export default {
  name: 'ShoppingCart',
  components: {
    BaseButton,
    CarbonNeutralIcon,
  },
  data() {
    return {}
  },

  computed: {
    // Use mapState for both state and getters
    ...mapState(useCart, ['cart', 'totalItems', 'orderTotal']),
    price() {
      return formatCurrency(this.orderTotal)
    },
  },
}
</script>

<style lang="scss" scoped>
.shopping-cart {
  background-color: var(--rose-50);
  max-width: 400px;
  min-height: 250px;
  height: max-content;
  border-radius: 10px;
  padding: 20px;
  margin-top: 16px;

  .title {
    color: var(--primary-red);
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    img {
      width: 100px;
    }
    p {
      margin-top: 20px;
    }
  }

  .disclaimer {
    display: flex;
    justify-content: center;
    padding: 15px;
    margin: 20px 0;
    width: 100%;
    background-color: var(--color-background);
  }

  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    .price {
      font-size: 20px;
    }
  }
}
</style>
