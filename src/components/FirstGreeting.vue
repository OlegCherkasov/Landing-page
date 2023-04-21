<template>
  <div id="cardHeader">
    <div class="logo">
      <img src="../assets/LogoImg.svg" alt="logo Round Rock" width="96" />
      <div class="logoName">
        <p class="logoNameCompany">{{ company }}</p>
        <p>{{ profession }}</p>
      </div>
    </div>

    <div class="greeting">
      <h3 class="subtitle">{{ subtitle }}</h3>
      <h1 class="title">{{ title }}</h1>
      <p class="text">{{ text }}</p>
      <input type="button" value="Help me" />
      <input type="button" value="Help me" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstGreeting",
  data() {
    return {
      company: "Round Rock",
      profession: "Electric Services",
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

h1,
h3,
p {
  margin: 0;
}

#cardHeader {
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

.logo {
  width: 468px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}

.logoName {
  font-size: 28px;
  font-weight: 300;
  line-height: 30px;
  font-family: "SF Pro Display", sans-serif;
  color: #4f4f4f;
  letter-spacing: 9px;
}

.logoNameCompany {
  margin-top: 7px;
  font-size: 62px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
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