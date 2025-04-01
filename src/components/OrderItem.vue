<template>
  <article class="container">
    <div class="container-item">
      <div class="container-image">
        <img :src="getImageURL" :alt="item.name" />
      </div>
      <div class="container-details">
        <p class="item-title">{{ item.name }}</p>
        <div>
          <span class="item-quantity">{{ item.quantity }}x</span>
          <span class="item-price"> {{ unitValue }}</span>
        </div>
      </div>
      <p class="item-total">{{ totalCost }}</p>
    </div>
  </article>
</template>

<script>
import { formatCurrency } from '@/utils/formatters'
import { mapState } from 'pinia'
import { useCart } from '@/stores/cart'

export default {
  name: 'OrderItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(useCart, ['orderTotal']),
    getImageURL() {
      return this.item.image.thumbnail
    },
    unitValue() {
      return `@ ${formatCurrency(this.item.price)}`
    },
    totalCost() {
      return `${formatCurrency(this.item.quantity * this.item.price)}`
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);

  &:first-child {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  &-item {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: 1px solid var(--rose-300);

    &:last-child {
      padding-bottom: 30px;
    }
  }

  &-footer {
    display: flex;
    flex-direction: row;
  }

  &-image {
    min-width: 56px; // Changed from width to min-width
    width: 56px; // Keep fixed width
    height: 56px; // Add fixed height
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; // Ensure image covers the fixed space
    }
  }

  &-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    flex-basis: 280px;

    @media (max-width: 920px) {
      flex-basis: auto;
      flex-grow: 1;
      min-width: 0; // Important for text-overflow to work
    }

    .item-title {
      width: 100%; // Needed for ellipsis
      text-align: left;

      @media (max-width: 920px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .item-quantity {
    margin-right: 30px;
  }
  .item-total {
    align-self: center;
    color: var(--rose-900);
  }
}
</style>
