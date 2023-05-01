<template>
  <div class="footer">
    <LogoCompany />
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
  margin-top: 40px;
  width: 100%;
  height: 110px;
  background-color: #c4c4c4;
}
</style>