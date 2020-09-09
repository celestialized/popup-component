<template >
<!-- <div id="root" :class="[toggle.maxed?'cardMax':'card']" v-on:click="popUp"> -->
<div class="card">

  <!-- CONTENT -->
  <!-- TODO: WORK HERE -->
  <img :src="content.ImageSrc" alt="productImg">
  <h6> {{ content.Title }} </h6>
  <p> {{ content.VariantPrice }} $</p>
  <button @click="sendToProductCard(content)">Show details</button>

</div>
</template>


<script>
export default {
  name: 'ShopCard',
  // TODO: Prop validation
  props: ["content"],
  data() {
    return {
      // showModal: false
    }
  },
  methods: {
    sendToProductCard(content) {
      this.$root.$emit('showCard', content);
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  display: flex;
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
  height: 300px;
  width: 200px;
  border: 1px solid rgba(1, 1, 1, .1);
  border-radius: 0px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  z-index: 3;
}

.card > img {
  height: 150px;
}

.card > h6 {
  margin-top: 5px;
  line-height: 10px;
}

button {
  padding: 5px 5px;
  background-color: #41B883;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin: 15px;
}



@media only screen and (max-width: 600px) {
  .card {
    margin: 5px;
  }
}
</style>
