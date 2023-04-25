<template>
  <div class="buttonSection">
    <input class="buttonSection--yellow font" type="button" value="Help Me" />
    <input
      class="buttonSection--hidden font"
      type="button"
      :value="buttonText"
    />
  </div>
</template>

<script>
export default {
  name: "ButtonSection",

  props: ["buttonText"],
};
</script>

<style scoped>
.buttonSection {
  padding-top: 25px;
}

.font {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.buttonSection--yellow {
  width: 160px;
  height: 50px;
  border-radius: 40px;
  border: none;
  background-color: #f2c94c;
  color: #333;
}

.buttonSection--hidden {
  padding-left: 30px;
  border: none;
  color: #eb5757;
}
</style>