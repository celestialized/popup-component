<template >
<div class="grid-container">
  <div class="img">
    <img :src="productCardContent.ImageSrc" alt="productImg">
  </div>
  <div class="close">
    <Close />
  </div>
  <div class="poduct-title">
    <h1> {{productCardContent.Title}}</h1>
  </div>
  <div class="product-desc">
    <h1 v-bind:title="productCardContent.Title"></h1>
  </div>
  <div class="product-price">
    <h4> {{productCardContent.Vendor}}</h4>
  </div>
  <div class="vendor-btn">
    <h2>{{productCardContent.VariantPrice}} $</h2>
  </div>
</div>
</template>

<script>
import Close from './Close.vue'

export default {
  name: 'ProductCard',
  props: ["productCardContent"],
  components: {
    Close
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
  methods: {
    closeCard() {
      this.$root.$emit("closeCard")
    }
  }
}
</script>

<style scoped>
.grid-container {
  height: 70vh;
  width: 80vh;
  margin: auto;
  margin-top: 15vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(1, 1, 1, .1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.8fr 0.5fr 2.3fr 0.9fr 0.8fr;
  grid-template-areas:
    "img close"
    "img poduct-title"
    "img product-desc"
    "img product-price"
    "img vendor-btn"
}

.img>img {
  grid-area: img;
  max-width: 100%;
  height: auto;
}

.poduct-title {
  grid-area: poduct-title;
}

.product-desc {
  grid-area: product-desc;
}

.product-price {
  grid-area: product-price;
}

.vendor-btn {
  grid-area: vendor-btn;
}

@media only screen and (max-width: 600px) {}
</style>
