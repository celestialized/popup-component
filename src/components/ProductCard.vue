<template >
<div class="grid-container">
  <div class="close">
    <Close />
  </div>
  <div class="img">
    <img :src="productCardContent.ImageSrc" alt="productImg">
  </div>
  <div class="poduct-title">
    <h4> {{productCardContent.Title}}</h4>
  </div>
  <div class="product-desc">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
    </p>
  </div>
  <div class="vendor-details">
    <div class="vendor-price">
      <h2><span>&#36;</span>{{productCardContent.VariantPrice}}</h2>
    </div>
    <div class="product-vendor">
      <blockquote>{{productCardContent.Vendor}}</blockquote>
    </div>
    <div class="vendor-button">
      <button>No Vendor Link yet</button>
    </div>
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
  },
  computed: {
    getImg: function() {
      return "background-image: url(productCardContent.ImageSrc)"
    }
  }
}
</script>

<style scoped>
.grid-container {
  text-align: center;
  justify-content: space-around;
  width: 70vh;
  margin: auto;
  margin-top: 2.5vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(1, 1, 1, .1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.1fr 0.3fr;
  grid-template-areas:
    "img img"
    "poduct-title poduct-title"
    "product-desc vendor-details";
}

.img {
  grid-area: img;
}

.grid-container>.close {
  position: relative;
  left: 0px;
  top: 0px;
  grid-area: img;
}

.img>img {
  width: 100%;
  max-height: 100%;
  background-image: fill;
  background-size: cover;
}

.poduct-title {
  grid-area: poduct-title;
  padding: 5px;
}

.product-desc {
  grid-area: product-desc;
  padding: 15px;
  text-align: justify;
}

.vendor-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-vendor {
  grid-area: vendor-details;
  text-align: center;
}

.vendor-price {
  grid-area: vendor-details;
}

.vendor-button>button {
  grid-area: vendor-details;
  padding: 5px 5px;
  background-color: #41B883;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin: 15px;
}

span {
  font-family: 'Playfair Display', serif;
}

@media only screen and (max-width: 780px) {
  .grid-container {
    display: grid;
    /* flex-direction: column; */
    justify-content: space-evenly;
    width: 95%;
    grid-template-columns: 1fr;
    grid-template-areas:
      "img"
      "poduct-title "
      "product-desc"
      "vendor-details";
  }

  .grid-container>.close {
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 3;
  }

  .product-desc {
    grid-area: product-desc;
    padding: 30px;
    text-align: justify;
  }
}
</style>
