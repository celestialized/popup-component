<template >
<div class="container text-center">
  <div class="grid-container">
    <div class="product">
      <div class="left">
        <img src="../assets/logo.png" alt="productImg">
      </div>
      <div class="right">
        <h1> {{productCardContent.Title}}</h1>
        <h4> {{productCardContent.Vendor}}</h4>
        <h2>{{productCardContent.VariantPrice}}</h2>
      </div>
      <p @click="closeCard()">CLOSE ME MTHRFKR</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ["productCardContent"],
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
      this.$root.$emit("closeCard")
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  gap: 1px 1px;
  grid-template-areas:
    "left right";
  height: 95vh;
  margin-top: 2.5vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  justify-content: space-around;
  border: 1px solid rgba(1, 1, 1, .1);
}

.left {
  grid-area: left;
}

.right {
  grid-area: right;
}

@media only screen and (max-width: 600px) {}
</style>
