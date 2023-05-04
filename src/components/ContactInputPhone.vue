<template>
  <input
    class="contact__input data basicFont"
    type="tel"
    placeholder="+380..."
    @input="$emit('getPhone', $event.target.value)"
  />
</template>

<script>
// v-model.number="phone",
// @input="$emit('getPhone', phone)"
export default {
  name: "ContactInputPhone",
  // data() {
  //   return {
  //     phone: "",
  //   };
  // },
};
</script>
