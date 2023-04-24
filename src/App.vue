<template>
  <div id="app">
    <FirstGreeting />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import FirstGreeting from "@/components/CardHeader.vue";

export default {
  name: "App",
  components: {
    FirstGreeting,
    // HelloWorld,
  },
};
</script>

<style>
#app {
  /* max-width: 1903px;
  height: 973px; 
  margin: 0 auto;

  background-image: url("@/assets/Rectangle236.png");
  background-repeat: no-repeat;
  background-size: 100% 100%; 

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
