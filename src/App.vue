<template>
<div id="app">
  <Shop />
  <ProductCard />
  <ShopCard />
</div>
</template>

<script>
import Shop from './components/Shop.vue'
import ProductCard from './components/ProductCard.vue'
import ShopCard from './components/ShopCard.vue'


export default {
  name: 'App',
  components: {
    Shop,
    ProductCard,
    ShopCard
  }
}
</script>

<style>

</style>
