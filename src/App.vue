<template>
  <div class="app">
    <HeaderSite />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderSite from "@/components/HeaderSite.vue";

export default {
  name: "App",
  components: {
    HeaderSite,

    // HelloWorld,
  },
};
</script>

<style>
.app {
  max-width: 1903px;
}
</style>
