<template >
<div class="container">
  <div class="product">
    <div class="left">
      <img src="../assets/logo.png" alt="productImg">
    </div>
    <div class="right">
      <h1> {{ productName }}</h1>
      <h4> {{ productDesc }}</h4>
      <h6> {{ available }}</h6>
      <h2> {{ productPrice }}</h2>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      productName: "Shoe",
      productId: "01001011",
      productDesc: "This is very much very nice",
      productPrice: "twofiddy",
      available: false
    }
  },
  methods: {
    addToCart() {
      console.log("added to cart!")
    },
    closeCard() {

    }
  }
}
</script>

<style>
.product {
  display: flex;
  flex-direction: row;
}

.left,
.right {
  margin: 15px;
  padding: 15px;
}
</style>
