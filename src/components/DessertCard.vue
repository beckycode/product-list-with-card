<template>
  <article class="card">
    <div class="card-header">
      <div class="card-image">
        <img :src="getImageURL" :alt="dessert.name" />
      </div>
      <ButtonActions class="button-add" />
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
    getImageURL() {
      return this.dessert.image.desktop
    },
    price() {
      return formatCurrency(this.dessert.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
}
</style>
