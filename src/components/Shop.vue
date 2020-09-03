<template >
<div class="container text-center">
  <div class="grid-container">
    <div class="img">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="search">
      <div class="tags">
        <span>Tags:</span>
        <span v-for="(tag, id) in tags" :key="id" id="tag" class="m-1 badge-pill badge-dark" @click="remove(tag)">{{tag.name}}</span>
      </div>
      <form @submit.prevent="addToTags">
        <label for="newTag"></label>
        <small id="newTagHelp" class="form-text text-muted">Enter a new search tag:</small>
        <input type="text" class="form-control" id="newTag" v-model="newTerm">
      </form>
    </div>
    <div class="products">
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
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
    // TODO: load new json in here and pass data to each shop card
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
      // TODO: do not allow emtoy strings
    },
    remove(tag) {
      const tagIndex = this.tags.indexOf(tag);
      this.tags.splice(tagIndex, 1);
    },
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
  gap: 1px 1px;
  grid-template-areas:
    "img tags"
    "img search"
    "img products";
  height: 95vh;
  margin-top: 2.5vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  justify-content: space-around;
  border: 1px solid rgba(1, 1, 1, .1);
}

.img {
  grid-area: img;
  margin: auto;
  padding: 15px;
}

.tags {
  grid-area: tags;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;
  overflow-y: scroll;
}

.search {
  grid-area: search;
  padding: 15px;
}


.products {
  grid-area: products;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: space-evenly;
}

/* PHONE */
@media only screen and (max-width: 780px) {
  .container {
    display: flex;
    justify-content: space-evenly;
  }

  .grid-container {
    display: flex;
    flex-flow: row wrap;
    gap: 5px 1px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
    overflow-y: scroll;
  }

  .img {
    padding: 0px;
    width: auto;
  }

  .search {
    padding: 15px;
    width: 100%;
  }

  .products {
    justify-content: space-evenly;
  }
}

/* TABLET >> DESKTOP*/
@media only screen and (min-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.3fr 0.3fr 2.1fr;
    gap: 1px 1px;
    grid-template-areas:
      "img tags"
      "img search"
      "products products";
    height: 95vh;
    margin-top: 2.5vh;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
    justify-content: space-around;
  }
}
</style>
