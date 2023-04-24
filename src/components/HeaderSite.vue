<template>
  <div class="header">
    <LogoCompany />
    <div class="header__greeting">
      <h3 class="subtitle">{{ subtitle }}</h3>
      <h1 class="title">{{ title }}</h1>
      <p class="text">{{ text }}</p>
      <input type="button" value="Help me" />
      <input type="button" value="Help me" />
    </div>
  </div>
</template>

<script>
import LogoCompany from "@/components/LogoCompany.vue";

export default {
  name: "HeaderSite",
  components: {
    LogoCompany,
  },
  data() {
    return {
      title: "Lorem",
      subtitle: "Lorem",
      text: "Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.",
      mainBtnText: "Help me",
      btnText: "Help me",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

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
  max-width: 361px;
  max-height: 317px;
  font-family: "SF Pro Display", sans-serif;
}

.subtitle {
  font-size: 18px;
  font-weight: 400;
}
</style>