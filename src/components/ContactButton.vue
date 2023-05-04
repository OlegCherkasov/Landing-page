<template>
  <button
    class="subm basicFont"
    type="submit"
    value="send contact"
    @click="$emit('clickButton', send)"
  >
    send contact
  </button>
</template>

    // @click="$emit('clickButton', (send = true))"
    
<script>
export default {
  name: "ContactButton",
  data() {
    return {
      send: true,
    };
  },
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