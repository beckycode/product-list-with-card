<template>
  <section class="shopping-cart">
    <h3 class="title">Your cart ({{ totalItems }})</h3>
    <article v-if="totalItems === 0" class="empty-cart">
      <img src="./../assets/images/illustration-empty-cart.svg" alt="Empty cart" />
      <p>Your added items will appear here</p>
    </article>
    <article v-else class="products">
      <BaseButton label="Confirm Order" />
    </article>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'ShoppingCart',
  components: {
    BaseButton,
  },
  data() {
    return {
      totalItems: 10,
      cart: [],
    }
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
}
</style>
