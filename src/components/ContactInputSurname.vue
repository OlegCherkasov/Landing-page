<template>
  <input
    v-model="surname"
    class="contact__input data basicFont"
    type="text"
    placeholder="You Surname"
    @input="$emit('getSurname', surname)"
  />
</template>

<script>
export default {
  name: "ContactInputSurname",
  data() {
    return {
      surname: "",
    };
  },
};
</script>

<style scoped>
</style>