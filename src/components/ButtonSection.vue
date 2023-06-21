<template>
  <div>
    <button class="button basicFont yellow">Help Me</button>
    <button class="button basicFont hidden">{{ buttonText }}</button>
  </div>
</template>

<script scoped>
export default {
  name: "ButtonSection",

  props: {
    buttonText: String,
  },
};
</script>

<style scoped>
.button {
  width: 160px;
  height: 50px;
  border-radius: 40px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

.yellow {
  background-color: #f2c94c;
  color: #333;
}

.yellow:hover {
  background-color: #57ebba;
}

.hidden {
  color: #eb5757;
}

.hidden:hover {
  border: 1px solid #333;
}
</style>