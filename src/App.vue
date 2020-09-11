<template>
<div id="app">
  <SearchButton v-if="state == 1" />
  <Shop v-else-if="state  == 2" />
  <ProductCard v-else-if="state == 3" :productCardContent="productCardContent" />
</div>
</template>

<script>
import SearchButton from './components/SearchButton.vue'
import Shop from './components/Shop.vue'
import ProductCard from './components/ProductCard.vue'


export default {
  name: 'App',
  components: {
    SearchButton,
    Shop,
    ProductCard
  },
  data() {
    return {
      state: 1,
      productCardContent: [],
    }
  },
  mounted() {
    this.$root.$on("openShop", () => {
      this.state = 2
    });
    this.$root.$on("close", () => {
      this.state--
    });
    this.$root.$on("showCard", (content) => {
      this.productCardContent = []
      this.productCardContent = content
      this.state = 3
    });
  },
}
</script>

<style>

</style>
