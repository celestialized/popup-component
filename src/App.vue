<template>
<div id="app">
  <Shop v-if="showCard  === false" />
  <ProductCard v-else :productCardContent="productCardContent" />
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
      this.productCardContent = content
      this.showCard = true
    });
    this.$root.$on("closeCard", () => {
      this.productCardContent = []
      this.showCard = false
    })
  },
  methods: {},
}
</script>

<style>

</style>
