<template lang="html">
  <div class="card">

  </div>
</template>

<script>
// import ProductCard from './ProductCard.vue'

export default {
  name: 'ShopCard',
  components: {
    // ProductCard
  },
  data() {
    return {
      productName: "Shoe",
      productId: "01001011",
      productDesc: "This is very much very nice",
      productPrice: "twofiddy",
      available: false
    }
  },
}
</script>

<style lang="css" scoped>

.card {
  height: 200px;
  width: 175px;
  border: 2px solid rgba(1, 1, 1, .1);
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
}


</style>
