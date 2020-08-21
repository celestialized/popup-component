<template>
<div class="container text-center">
  <h2> {{ tags }}</h2>
  <div class="row">
    <div class="col">
      <h2>Your imgage</h2>
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="col">
      <h2> Tags</h2>
      <span v-for="pill in pills" v-bind:key="pill.id" class="badge badge-pill badge-success">{{pill.name}}</span>
      <form @submit.prevent="addToTags()">
        <label for="newTag"></label>
        <small id="newTagHelp" class="form-text text-muted">Enter a new search tag:</small>
        <input type="text" class="form-control" id="newTag" value="">
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
  props: {
    pills: String
  },
  // TODO: add method addToTags() on the form
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: auto;
}
</style>
