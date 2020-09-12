<template lang="html">
  <div @click="close()" class="close-container">
    <div class="leftright"></div>
    <div class="rightleft"></div>
  </div>
</template>

<script>
export default {
  name: 'Close',
  methods: {
    close() {
      this.$root.$emit('close');
    }
  }
}
</script>

<style lang="css" scoped>
.close-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  cursor: pointer;
  z-index: 3;
}

.leftright {
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: black;
  border-radius: 1px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft {
  height: 4px;
  width: 50px;
  position: absolute;
  margin-top: 24px;
  background-color: black;
  border-radius: 1px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

.close-container:hover .leftright {
  transform: rotate(-45deg);
  background-color: #F25C66;
}

.close-container:hover .rightleft {
  transform: rotate(45deg);
  background-color: #F25C66;
}

</style>
