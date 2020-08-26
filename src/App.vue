<template>
<div id="app">
  <Shop />
  <!-- <ProductCard /> -->
  <ShopCard />
</div>
</template>

<script>
import Shop from './components/Shop.vue'
// import ProductCard from './components/ProductCard.vue'


export default {
  name: 'App',
  components: {
    Shop,
    // ProductCard
  }
}
</script>

<style>

</style>
