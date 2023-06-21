<template>
  <div class="header">
    <LogoCompany class="header__logo" />
    <div class="greeting">
      <DoubleTitle title="LOREM" isHeader="true" />
      <p class="text basicFont">{{ text }}</p>
      <ButtonSection class="header__btn" buttonText="Help Me" />
    </div>
  </div>
</template>

<script>
import LogoCompany from "@/components/LogoCompany.vue";
import DoubleTitle from "@/components/DoubleTitle.vue";
import ButtonSection from "@/components/ButtonSection.vue";

export default {
  name: "HeaderSite",
  components: {
    LogoCompany,
    DoubleTitle,
    ButtonSection,
  },
  data() {
    return {
      text: "Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100vh;
  background: no-repeat url("../assets/BackGroundImg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}

.header__logo {
  margin-top: 40px;
  margin-left: 80px;
}

.greeting {
  max-width: 360px;
  min-height: 317px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  padding-top: 20px;
  font-weight: 500;
  color: #4f4f4f;
  font-size: 14px;
  line-height: 20px;
}

.header__btn {
  margin: 0 auto;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 440px) {
  .header__btn {
    flex-direction: row;
  }

  .header__logo {
    margin-top: 80px;
  }
}
</style>