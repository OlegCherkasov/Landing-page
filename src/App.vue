<template>
  <div class="app">
    <HeaderSite />
    <ServicesSite />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderSite from "@/components/HeaderSite.vue";
import ServicesSite from "@/components/ServicesSite.vue";

export default {
  name: "App",
  components: {
    HeaderSite,
    ServicesSite,

    // HelloWorld,
  },
};
</script>

<style>
.app {
  max-width: 1903px;
}
</style>
