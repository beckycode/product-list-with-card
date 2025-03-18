<template>
  <main class="container">
    <h1>Desserts</h1>
    <section class="desserts">
      <DessertCard v-for="dessert in desserts" :key="dessert.id" :dessert="dessert" />
    </section>
  </main>
</template>

<script>
import data from './../utils/data'
import DessertCard from './DessertCard.vue'
export default {
  name: 'DessertsList',
  components: {
    DessertCard,
  },
  data() {
    return {
      desserts: data,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .desserts {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 10px;
  }
}
</style>
