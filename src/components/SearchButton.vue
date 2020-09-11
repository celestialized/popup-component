<template>
<button @click="openShop()" type="button" name="button"> search </button>
</template>

<script>
export default {
  name: "SearchButton",
  methods: {
    openShop() {
      this.$root.$emit("openShop")
    }
  }
}
</script>

<style scoped>
button {
  display: flex;
  padding: 5px 5px;
  background-color: #41B883;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin: 15px;
}
</style>
