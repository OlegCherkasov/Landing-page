<template>
  <button class="subm basicFont" v-on="$listeners">send contact</button>
</template>

<script>
export default {
  name: "ContactButton",
};
</script>

<style scoped>
.subm {
  width: 168px;
  height: 56px;
  border-radius: 28px;
  border: none;
  display: block;
  border: 3px solid white;
  background-color: #e15252;
  font-size: 16px;
  font-weight: lighter;
  color: white;
  letter-spacing: 2px;
  margin-top: 20px;
}
</style>