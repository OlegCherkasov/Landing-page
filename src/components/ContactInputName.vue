<template>
  <input
    v-model="name"
    class="contact__input data basicFont"
    type="text"
    placeholder="You Name"
    @input="$emit('getName', name)"
  />
</template>
<script>
export default {
  name: "ContactInputName",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>
</style>