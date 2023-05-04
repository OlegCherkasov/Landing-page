<template>
  <button
    class="contact__input subm basicFont"
    type="submit"
    value="send contact"
    @click="$emit('clickButton', 1)"
  />
</template>

<script>
export default {
  name: "ContactButton",
};
</script>

<style scoped>
.contact__input {
  width: 374px;
  height: 56px;
  border-radius: 28px;
  border: none;
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #e15252;
}

.subm {
  width: 168px;
  border: 3px solid white;
  background-color: #e15252;
  font-size: 16px;
  font-weight: lighter;
  color: white;
  letter-spacing: 2px;
  margin-top: 20px;
}

input::placeholder {
  color: #e15252;
  font-weight: lighter;
  font-size: 20px;
  opacity: 60%;
}

.contact__input:focus-visible {
  outline: 2px solid white;
  outline-offset: 3px;
}

.subm:hover {
  outline: 2px solid white;
  outline-offset: 3px;
}
</style>