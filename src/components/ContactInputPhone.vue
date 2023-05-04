<template>
  <div>
    <input
      v-model.number="phone"
      class="contact__input data basicFont"
      type="phone"
      placeholder="+380..."
      @input="$emit('getPhone', phone)"
    />
  </div>
</template>

<script>
export default {
  name: "ContactInputPhone",
  data() {
    return {
      phone: "",
    };
  },
};
</script>

<style scoped>
</style>