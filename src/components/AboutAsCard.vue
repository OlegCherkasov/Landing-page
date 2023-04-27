<template>
  <div class="aboutAsCard">
    <p class="aboutAsCard__marker basicFont">{{ aboutMarker }}</p>
    <p class="text basicFont">{{ aboutCardText }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutAsCard",

  props: ["aboutMarker", "aboutCardText"],
};
</script>

<style scoped>
.aboutAsCard {
  width: 310px;
}

.aboutAsCard__marker {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #d89595;
  color: #d89595;
  text-align: center;
}

.text {
  padding-top: 10px;
  font-weight: 500;
  color: #4f4f4f;
}
</style>