<template >
<div class="container text-center">
  <div class="product-img">
    <h2>Your imgage</h2>
  </div>
  <div class="content">
    <div class="search">


    </div>
    <div class="shop-items">
      <h2> Shop Items </h2>

    </div>
  </div>
</div>
<!-- <div v-if="displayController == 2">
  <h1 @click="displayController == 1"> peofihpeih </h1>
</div> -->
</template>



<script>
import ShopCard from './ShopCard.vue'
export default {
  name: 'Shop',
  components: {
    ShopCard
  },
  data() {
    return {
      tags: [],
      newTerm: "",
      displayController: 1
    }
  },
  methods: {
    addToTags() {
      this.tags.push({
        name: this.newTerm,
      });
      this.newTerm = '';
    },
    remove(tag) {
      const tagIndex = this.tags.indexOf(tag);
      this.tags.splice(tagIndex, 1);
    },
    toggle() {
      this.displayController = 2;
    }
  },
  watch: {
    tags() {
      localStorage.tags = JSON.stringify(this.tags);
      console.log("tags changed");
      // TODO: Here's gonna be the function watching tags to live update our search.
      // TODO: Clear localStorage on new search.
    }
  },
  mounted() {
    if (localStorage.tags) {
      this.tags = JSON.parse(localStorage.tags);
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 0.6fr 0.3fr 2.1fr;
  gap: 1px 1px;
  grid-template-areas: "img tags""img search""img products";
}

.img {
  grid-area: img;
}

.tags {
  grid-area: tags;
}

.search {
  grid-area: search;
}

.products {
  grid-area: products;
}
</style>
