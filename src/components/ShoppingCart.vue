<template>
  <section class="shopping-cart">
    <h3 class="title">Your cart ({{ totalItems }})</h3>
    <article v-if="totalItems === 0" class="empty-cart">
      <EmptyCartIcon />
      <p>Your added items will appear here</p>
    </article>
    <article v-else class="products">
      <ShoppingCartItem v-for="cartItem in cart" :key="cartItem.id" :item="cartItem" />
      <p class="order-total">
        Order Total <span class="price accent">{{ price }}</span>
      </p>
      <div class="disclaimer">
        <CarbonNeutralIcon class="icon" />
        <p>This is a <span class="accent">carbon-neutral</span> dellivery</p>
      </div>
      <BaseButton label="Confirm Order" />
    </article>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
import ShoppingCartItem from './ShoppingCartItem.vue'
import { useCart } from '@/stores/cart'
import { mapState } from 'pinia'
import { formatCurrency } from '@/utils/formatters'
import CarbonNeutralIcon from '@/assets/images/icon-carbon-neutral.svg?component'
import EmptyCartIcon from '@/assets/images/illustration-empty-cart.svg?component'

export default {
  name: 'ShoppingCart',
  components: {
    BaseButton,
    ShoppingCartItem,
    CarbonNeutralIcon,
    EmptyCartIcon,
  },
  data() {
    return {}
  },

  computed: {
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
  padding: 25px;
  margin-top: 16px;

  @media (max-width: 540px) {
    max-width: 100%;
  }

  .title {
    color: var(--primary-red);

    @media (max-width: 920px) {
      font-size: 26px;
    }
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
    margin: 25px 0;
    width: 100%;
    background-color: var(--color-background);

    .icon {
      margin-right: 5px;
    }
  }

  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;

    .price {
      font-size: 20px;

      @media (max-width: 920px) {
        font-size: 26px;
      }
    }
  }
}
</style>
