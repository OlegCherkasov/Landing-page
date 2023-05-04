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
} */
</style>