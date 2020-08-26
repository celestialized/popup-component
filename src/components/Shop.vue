<template >
<div class="container text-center">
  <div class="product-img">
    <h2>Your imgage</h2>
    <img src="../assets/logo.png" alt="logo" @click="displayController == 2">
  </div>
  <div class="search">
    <h3> Tags</h3>
    <span v-for="(tag, id) in tags" :key="id" id="tag" class="m-1 badge-pill badge-dark" @click="remove(tag)">{{tag.name}}
    </span>
    <form @submit.prevent="addToTags">
      <label for="newTag"></label>
      <small id="newTagHelp" class="form-text text-muted">Enter a new search tag:</small>
      <input type="text" class="form-control" id="newTag" v-model="newTerm">
    </form>
  </div>
  <div class="shop-items">
    <h2> Shop Items </h2>
    <ShopCard />
  </div>
</div>
<!-- <div v-if="displayController == 2">
  <h1 @click="displayController == 1"> peofihpeih </h1>
</div> -->
</template>



<script>
export default {
  name: 'Shop',
  components: {

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
.container {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-rows: 1fr 5fr; */
  grid-template-areas:
    "product-img search search search"
    "product-img shop shop shop"
    "product-img shop shop shop"
    "product-img shop shop shop"
    "product-img shop shop shop";
}

.product-img {
  /* grid-area: 1 / 1 / 7 / 3; */
  border: 2px solid red;
}

.search {
  /* grid-area: 1 / 3 / 2 / 9; */
  /* margin: 15px; */
  border: 2px solid red;
}

.search>input {
  margin: 15px;
}

input {
  margin: auto;
  width: 80%;
}

.shop-items {
  /* grid-area: 2 / 3 / 7 / 9; */
  border: 2px solid red;
}

#tag {
  cursor: pointer;
}

@media only screen and (max-width:550px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
