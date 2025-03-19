<template>
  <main>
    <DessertsList />
    <ShoppingCart />
  </main>
</template>

<script>
import DessertsList from './components/DessertsList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    DessertsList,
    ShoppingCart,
  },
}
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
