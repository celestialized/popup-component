<template lang="html">
  <div id="root" :class="[toggle.maxed?'cardMax':'card']" v-on:click="popUp">
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
  components: {
    // ProductCard
  },
  props: {
    // TODO: process passed props -> computed
  },
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
  },
  methods: {
    popUp() {
      if (this.toggle.maxed == false) {
        this.toggle.maxed = !this.toggle.maxed
        // alert("false");
        document.body.insertBefore(  document.getElementById( 'root'), document.body.firstChild  );
        // TODO: this only gets the first element and attaches "target",  use id as arg in this function
        document.getElementById( 'root').classList.add("target");
      } else {
        this.toggle.maxed = !this.toggle.maxed
        // alert("true");
        // document.body.removeChild( document.getElementByClassName("target"));
        document.body.removeChild( document.body.children[0] )
        document.body.insertBefore(document.getElementById( 'root'), document.getElementByClassName("products").firstChild);
      }


    }
  }
}
  </script>

<style lang="css" scoped>

/* .container123123 {
  position: absolute;
  top: 50px;
  left: 50px;
  border: 2px solid red;
  height: 100px;
  width: 100px;
} */

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
  /* left: 50%;
  top: 10vh; */
  min-width: 150px;
  background-color: white;
  z-index: 2;
  cursor: pointer;
  height: 50vh;
  width: 50vh;
  margin: auto;
  border: 2px solid red;
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(3, 23, 18, 0.15);
}


</style>
