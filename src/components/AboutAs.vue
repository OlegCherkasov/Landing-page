<template>
  <div class="aboutAs">
    <DoubleTitle title="About As" />
    <AboutAsCards />
  </div>
</template>

<script>
import DoubleTitle from "@/components/DoubleTitle.vue";
import AboutAsCards from "@/components/AboutAsCards.vue";

export default {
  name: "AboutAs",

  props: [],

  components: { DoubleTitle, AboutAsCards },

  data() {
    return {};
  },
};
</script>

<style scopped>
.aboutAs {
  padding-top: 50px;
  height: 727px;
  background-color: #f2f2f2;
}
</style>