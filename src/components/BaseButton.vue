<template>
  <button class="button">{{ label }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: 'Add to Cart',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 20px;
  width: 100%;
  border: 50px;
  border-radius: 25px;
  background-color: var(--primary-red);
  color: var(--color-text-light);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--primary-red-dark);
  }
}
</style>
