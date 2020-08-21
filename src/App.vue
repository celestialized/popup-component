<template>
<div id="app">
  <Popup v-bind:pills="tags" />
</div>
</template>

<script>
import Popup from './components/Popup.vue'

export default {
  name: 'App',
  data() {
    return {
      tags: [{
          id: 0,
          name: "tree"
        },
        {
          id: 1,
          name: "banana"
        },
        {
          id: 2,
          name: "obama"
        },
        {
          id: 3,
          name: "karma"
        },
        {
          id: 4,
          name: "wall"
        },
      ]
    }
  },
  components: {
    Popup
  }
}
</script>

<style>

</style>
