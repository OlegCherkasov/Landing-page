<template>
  <div class="buttonSection">
    <input class="button font yellow" type="button" value="Help Me" />
    <input class="button font hidden" type="button" :value="buttonText" />
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

.button {
  width: 160px;
  height: 50px;
  border-radius: 40px;
  border: none;
}

.font {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 14px;
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