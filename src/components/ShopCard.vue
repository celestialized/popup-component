<template lang="html">
  <!-- <div id="root" :class="[toggle.maxed?'cardMax':'card']" v-on:click="popUp"> -->
  <div id="root" class="card">

    <!-- CONTENT -->
    <!-- TODO: WORK HERE -->
    <img :src="content.ImageSrc" alt="productImg">
    <p> {{ content.Title }} <p>
    <p > {{ content.VariantPrice }} $</p>
    <button @click="showModal = true">Show details</button>




  </div>
</template>


<script>
export default {
  name: 'ShopCard',
  // TODO: Prop validation
  props: ["content"],
  data() {
    return {
      showModal: false
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
.card {
  display: flex;
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
  max-height: 250px;
  width: 200px;
  border: 1px solid rgba(1, 1, 1, .1);
  border-radius: 0px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
}

.card > img {
  height: 125px;
}

.card > h6 {
  margin-top: 15px;
}

button {
  /* display: inline-block; */
  padding: 5px 5px;
  background-color: #41B883;
  border-radius: 0px;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
  border: none;
}



@media only screen and (max-width: 600px) {
  .card {
    width: 95vh;
  }
}
</style>
