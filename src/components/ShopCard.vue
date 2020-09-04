<template lang="html">
  <div id="root" :class="[toggle.maxed?'cardMax':'card']" v-on:click="popUp">
    <p v-bind="content"> {{ content.Title }} </p>
  </div>
</template>


<script>
export default {
  name: 'ShopCard',
  // TODO: Prop validation
  props: ["content"],
  data() {
    return {
      toggle: {
        maxed: false
      }
    }
  },
  methods: {
    popUp() {
      if (this.toggle.maxed == false) {
        this.toggle.maxed = !this.toggle.maxed
        // alert("false");
        document.body.insertBefore(document.getElementById('root'), document.body.firstChild);
        // TODO: this only gets the first element and attaches "target",  use id as arg in this function
        document.getElementById('root').classList.add("target");
      } else {
        this.toggle.maxed = !this.toggle.maxed
        // alert("true");
        // document.body.removeChild( document.getElementByClassName("target"));
        document.body.removeChild(document.body.children[0])
        document.body.insertBefore(document.getElementById('root'), document.getElementByClassName("products").firstChild);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  background-color: white;
  cursor: pointer;
  height: 250px;
  width: 200px;
  border: 1px solid rgba(1, 1, 1, .1);
  border-radius: 0px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
}

.cardMax {
  position: absolute;
  min-width: 150px;
  background-color: white;
  z-index: 2;
  cursor: pointer;
  height: 50vh;
  width: 50vh;
  margin: auto;
  border: 2px solid red;
  border-radius: 4px;
  margin: 10px;
  box-shadow: 0px 5px 5px rgba(3, 23, 18, 0.15);
}

@media only screen and (max-width: 600px) {
  .card {
    width: 95vh;
  }
}
</style>
