<template >
<div class="grid-container">
  <div class="Img">
    <img :src="productCardContent.ImageSrc" alt="productImg">
  </div>
  <div class="detailContainer">
    <div class="PoductTitle">
      <h1> {{productCardContent.Title}}</h1>
    </div>
    <div class="ProductDesc">
      <h1 v-bind:title="productCardContent.Title"></h1>
    </div>
    <div class="ProductPrice">
      <h4> {{productCardContent.Vendor}}</h4>
    </div>
    <div class="VendorBtn">
      <h2>{{productCardContent.VariantPrice}} $</h2>
    </div>
    <div class="close">
      <p @click="closeCard()">close</p>
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
.grid-container {
  height: 70vh;

  /* change that later */
  /* width: 80vh; */

  /* margin: auto; */
  margin-top: 15vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(1, 1, 1, .1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.6fr 0.8fr 2.3fr 0.9fr 0.8fr 0.6fr;
  gap: 1px 1px;
  grid-template-areas:
    "Img Close"
    "Img PoductTitle"
    "Img ProductDesc"
    "Img ProductPrice"
    "Img VendorBtn"
    "Img .";
}

.Img {
  grid-area: Img;
}

/* this makes wierd thingys with the grid*/
.detailContainer {
  padding: 15px;
}

.Close {
  grid-area: Close;
  float: right;
  cursor: pointer;
}

.PoductTitle {
  grid-area: PoductTitle;
}

.ProductDesc {
  grid-area: ProductDesc;
}

.ProductPrice {
  grid-area: ProductPrice;
}

.VendorBtn {
  grid-area: VendorBtn;
}




@media only screen and (max-width: 600px) {}
</style>
