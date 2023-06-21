<template>
  <div class="app">
    <HeaderSite />
    <ServicesSite />
    <AboutAsSite />
    <GallerySite />
    <ContactUsSite />
    <FooterSite />
  </div>
</template>

<script>
import HeaderSite from "@/views/HeaderSite.vue";
import ServicesSite from "@/views/ServicesSite.vue";
import AboutAsSite from "@/views/AboutAsSite.vue";
import GallerySite from "@/views/GallerySite.vue";
import ContactUsSite from "@/views/ContactUsSite.vue";
import FooterSite from "@/views/FooterSite.vue";

export default {
  name: "App",

  components: {
    HeaderSite,
    ServicesSite,
    AboutAsSite,
    GallerySite,
    ContactUsSite,
    FooterSite,
  },

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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

.app {
  width: 100%;
  margin: 0 auto;
}

.mainFont {
  font-family: "SF Pro Display", sans-serif;
}

.basicFont {
  font-family: "Poppins", sans-serif;
}
</style>
