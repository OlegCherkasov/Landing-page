<template>
  <div class="header">
    <LogoCompany />
    <div class="greeting">
      <DoubleTitle />
      <p class="text">{{ text }}</p>
      <ButtonSection :buttonText="arrButtonText[0]" />
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
      arrButtonText: ["Help me", "More information"],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

.header {
  width: 100%;
  height: 100vh;
  background: no-repeat url("../assets/BackGroundImg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 115px;
}

.greeting {
  max-width: 360px;
  padding-top: 8px;
  height: 317px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #4f4f4f;
}

.text {
  padding-top: 20px;
}
</style>