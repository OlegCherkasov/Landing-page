<template>
  <input
            class="contact__input pad basicFont"
    type="tel"
    placeholder="+380..."
    @input="$emit('getPhone', $event.target.value)"
  />
  <!-- v-model.number="phone",
@input="$emit('getPhone', phone)" -->
</template>

<script>
export default {
  name: "ContactInputPhone",
  // data() {
  //   return {
  //     phone: "",
  //   };
  // },
};
</script>
