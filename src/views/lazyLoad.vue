<template>
  <div class="about">
    <img class="img" v-lazyLoad="require('../assets/img/轮播banner.png')" />
    <img class="img" v-lazyLoad="require('../assets/img/Frame 765.png')" />
    <img class="img" v-lazyLoad="require('../assets/img/轮播banner.png')" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.about {
  .img {
    width: 100%;
    height: 700px;
    border: 1px solid red;
  }
  .ge {
    width: 100px;
    height: 500px;
  }
}
</style>
