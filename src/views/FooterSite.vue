<template>
  <div class="footer">
    <LogoCompany :isFooter="true" />
  </div>
</template>

<script>
import LogoCompany from "@/components/LogoCompany.vue";

export default {
  name: "FooterSite",

  components: {
    LogoCompany,
  },
};
</script>

<style>
.footer {
  padding: 18px 0 18px 0;
  width: 100%;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>