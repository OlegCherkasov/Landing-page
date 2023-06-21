<template>
  <input
    v-model="surname"
    class="contact__input pad basicFont"
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
