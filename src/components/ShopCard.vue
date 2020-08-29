<template lang="html">
  <div :class="[toggle.maxed?'cardMax':'card']" v-on:click="toggle.maxed = !toggle.maxed">
    <p> {{ content.Title }}</p>
    <p> {{ content.ImageSrc }}</p>
    <p> {{ content.VariantPrice }}</p>
    <p> {{ content.Type }}</p>
    <p> {{ content.Tags }}</p>
  </div>
</template>

<script>
// import ProductCard from './ProductCard.vue'

export default {
  name: 'ShopCard',
  props: {
    // TODO: process passed props -> computed
  },
  // TODO: camel case and regex space in all keys in the new json!
  data() {
    return {
      content: {
        Title: "Acana Adult Dog",
        ImageSrc: "http://cdn.shopify.com/s/files/1/0046/8722/products/acana-adult-dog.jpeg?95",
        VariantPrice: 5,
        Type: "Dog food",
        Tags: "Adult, Dog, Large Breed, Medium Breed, Grain Free",
      //   // maxed: false
    },
      toggle :{
        maxed: false
      }
    }
  }
}
  </script>

<style lang="css" scoped>

.card {
  background-color: white;
  cursor: pointer;
  height: 200px;
  width: 175px;
  border: 2px solid rgba(1, 1, 1, .1);
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
}

.cardMax {
  position: absolute;
  left: 10vh;
  right: 10vh;
  background-color: white;
  z-index: 2;
  cursor: pointer;
  height: 100vh;
  width: 100vh;
  margin: auto;
  border: 2px solid red;
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(3, 23, 18, 0.15);
}


</style>
