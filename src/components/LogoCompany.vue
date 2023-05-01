<template>
  <!-- <div :class="{isFooter ? logo__footer : logo}" > -->
  <div class="logo">
    <img
      src="@/assets/LogoImg.svg"
      alt="logo Round Rock"
      width="96"
      height="102"
    />
    <div class="mainFont">
      <p class="logo--company">{{ company }}</p>
      <p class="logo--prof">{{ profession }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoCompany",

  props: ["isFooter"],

  data() {
    return {
      company: "Round Rock",
      profession: "Electric Services",
    };
  },
};
</script>

<style scoped>
.logo {
  width: 468px;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
}

.logo--company {
  margin-top: 7px;
  font-size: 62px;
  font-weight: 700;
  line-height: 60px;
}

.logo--prof {
  font-size: 28px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 9px;
}
</style>