<template>
<div class="container text-center">
  <div class="row">
    <div class="col">
      <h2>Your imgage</h2>
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="col">
      <h2> Tags</h2>
      <span v-for="(tag, id) in tags" :key="id" class="m-1 badge-pill badge-dark" @click="remove(tag)">{{tag.name}}
      </span>
      <form @submit.prevent="addToTags">
        <label for="newTag"></label>
        <small id="newTagHelp" class="form-text text-muted">Enter a new search tag:</small>
        <input type="text" class="form-control" id="newTag" v-model="newTerm">
        <h3> {{ newTerm }}</h3>
      </form>
    </div>
    <div class="col">
      <h2> Shop Items </h2>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      tags: [],
      newTerm: ""
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: auto;
}
</style>
