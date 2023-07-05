<template>
  <div class="about">
    <div v-longPress="getInfo">点击</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getInfo() {
      console.log(123);
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
