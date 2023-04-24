<template>
  <div class="doubleTitle">
    <p class="subtitle">{{ subtitle }}</p>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "DoubleTitle",
  data() {
    return {
      subtitle: "lorem",
      title: "Lorem",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

.subtitle {
  font-family: "SF Pro Display", sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 37px;
  color: #4f4f4f;
}

.title {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 106px;
  line-height: 96px;
  color: #eb5757;
}
</style>>
