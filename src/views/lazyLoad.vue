<template>
  <div class="about">
    <img v-lazyLoad="require('../assets/img/轮播banner.png')" />
    <img v-lazyLoad="require('../assets/img/Frame 765.png')" />
    <img v-lazyLoad="require('../assets/img/轮播banner.png')" />
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
}
</style>
