<template>
  <div class="services">
    <DoubleTitle />
    <div class="service__cards">
      <ServicesCard />
    </div>
  </div>
</template>

<script>
import DoubleTitle from "@/components/DoubleTitle.vue";
import ServicesCard from "@/components/ServicesCard.vue";

export default {
  components: {
    DoubleTitle,
    ServicesCard,
  },
};
</script>

<style>
.services {
  padding-top: 50px;
}
</style>