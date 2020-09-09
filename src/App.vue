<template>
<div id="app">

  <!-- <div v-if="showCard = true"> -->
  <!-- v-if="loginType === 'username'" -->
  <!-- <ProductCard /> -->
  <!-- </div> -->
  <!-- <div v-else> -->
  <Shop />
  <ProductCard :content="productCardContent" />
  <!-- </div> -->

</div>
</template>

<script>
import Shop from './components/Shop.vue'
import ProductCard from './components/ProductCard.vue'


export default {
  name: 'App',
  components: {
    Shop,
    ProductCard
  },
  data() {
    return {
      showCard: false,
      productCardContent: [],
    }
  },
  mounted() {
    this.$root.$on("showCard", (content) => {
      this.productCardContent = []
      this.productCardContent.push(content)
      this.showCard = true
    });
    this.$root.$on("closeCard", () => {
      this.productCardContent = []
      this.showCard = true
    })
  },
  methods: {},
}
</script>

<style>

</style>
