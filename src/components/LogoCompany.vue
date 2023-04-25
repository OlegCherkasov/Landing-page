<template>
  <div class="logo">
    <img src="../assets/LogoImg.svg" alt="logo Round Rock" width="96" />
    <div class="logo__name">
      <p class="logo__name--company">{{ company }}</p>
      <p>{{ profession }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoCompany",
  data() {
    return {
      company: "Round Rock",
      profession: "Electric Services",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

.logo {
  width: 468px;
  margin-top: 80px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
}

.logo__name {
  font-size: 28px;
  font-weight: 300;
  line-height: 30px;
  font-family: "SF Pro Display", sans-serif;
  color: #4f4f4f;
  letter-spacing: 9px;
}

.logo__name--company {
  margin-top: 7px;
  font-size: 62px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
}
</style>