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
/* .contact__input {
  width: 374px;
  height: 56px;
  border-radius: 28px;
  border: none;
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #e15252;
}

.data {
  padding-left: 70px;
} */
</style>