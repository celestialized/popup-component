<template lang="html">
  <div class="container">
    <div class="card">
    <img src="../assets/logo.png" alt="img">
    <hr>
    <h2>Product name</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'ShopCard',
}
</script>

<style lang="css" scoped>
  .card {
    display: flex;
    border: 1px solid grey;
    margin: 3px;
    border-radius: 3px;
    text-align: center;
  }
  .card > img {
    margin: 25px;
    border: 1px solid grey;

  }
</style>
