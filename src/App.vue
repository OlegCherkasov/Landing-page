<template>
  <div class="app">
    <HeaderSite />
    <ServicesSite />
    <AboutAs />
  </div>
</template>

<script>
import HeaderSite from "@/components/HeaderSite.vue";
import ServicesSite from "@/components/ServicesSite.vue";
import AboutAs from "./components/AboutAs.vue";

export default {
  name: "App",

  metaInfo() {
    return {
      title: "FIRST SITE ON VUE",
      meta: [
        {
          name: "description",
          content: "website on Vue",
        },
        {
          property: "og:title",
          content: "My Vue",
        },
        { property: "og:site_name", content: "First Vue" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },

  components: {
    HeaderSite,
    ServicesSite,
    AboutAs,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

* {
  box-sizing: border-box;
}

h1,
h3,
p,
img {
  margin: 0;
}

.app {
  max-width: 1803px;
  margin: 0 auto;
}

.mainFont {
  font-family: "SF Pro Display", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
}

.basicFont {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
</style>
