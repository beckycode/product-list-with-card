<template>
  <div v-if="!isInCart" class="button">
    <div class="icon-cart">
      <CartIcon />
    </div>
    <p class="button-label">Add to Cart</p>
  </div>
  <div v-else class="button button-selected">
    <div class="action">
      <DecrementIcon />
    </div>
    {{ totalItemCart }}
    <div class="action">
      <IncrementIcon />
    </div>
  </div>
</template>

<script>
import CartIcon from '@/assets/images/icon-add-to-cart.svg?component'
import IncrementIcon from '@/assets/images/icon-increment-quantity.svg?component'
import DecrementIcon from '@/assets/images/icon-decrement-quantity.svg?component'

export default {
  name: 'ButtonActions',
  components: {
    CartIcon,
    IncrementIcon,
    DecrementIcon,
  },
  computed: {
    isInCart() {
      return true
      // return this.cart.some((item) => item.id === this.dessert.id)
    },
    totalItemCart() {
      return 3
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

    &:hover {
      color: var(--color-text-light);
    }

    .action {
      border: 2px solid var(--rose-50);
      border-radius: 12px;
      padding: 0 6px;

      // &:first-child {
      //   padding: 7px 3px;
      // }

      &:hover {
        background-color: var(--color-background);
        :deep(path) {
          fill: var(--primary-red);
        }
      }
    }
  }
}

// .action {
//   svg {
//     fill: var(--primary-red);
//     transition: fill 0.2s ease;

//     &:hover {
//       fill: var(--primary-red-dark);
//       cursor: pointer;
//     }
//   }
// }
</style>
