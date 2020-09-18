<template>
<div id="app">
  <SearchButton v-if="this.display == 1" />
  <Shop v-else-if="this.display  == 2" />
  <ProductCard v-else-if="this.display == 3" :productCardContent="productCardContent" />
</div>
</template>

<script>
import SearchButton from './components/SearchButton.vue';
import Shop from './components/Shop.vue';
import ProductCard from './components/ProductCard.vue';
import {
  store
} from './store.js';
import {
  mapState,
  mapGetters,
  mapMutations,
  // mapActions,
} from 'vuex'


export default {
  name: 'App',
  store: store,
  components: {
    SearchButton,
    Shop,
    ProductCard
  },
  computed: {
    ...mapState(['display']),
    ...mapGetters(['isAdult'])
  },
  methods: {
    ...mapMutations(['openShop'], ['close'], ['showCard']),
  }
}
</script>

<style>

</style>

<!-- [Vue warn]:
Property or method "state" is not defined on the instance but
referenced during render. Make sure that this property is reactive,
either in the data option, or for class-based components, by initializing
the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

found in

 <App>
 <Root> -->
