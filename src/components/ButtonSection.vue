<template>
  <div class="buttonSection">
    <input type="button" value="Help me" />
    <input type="button" :value="buttonText" />
  </div>
</template>

<script>
export default {
  name: "ButtonSection",

  props: ["buttonText"],
};
</script>

<style>
</style>