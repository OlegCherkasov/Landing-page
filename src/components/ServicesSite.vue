<template>
  <div class="services">
    <DoubleTitle class="service__dblTitle" />
    <div class="service__cards">
      <ServicesCard v-for="index in 6" :key="index" />
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

.service__dblTitle {
  margin-left: 350px;
}

.service__cards {
  margin-top: 30px;
  padding: 60px 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  background-color: #f2f2f2;
}
</style>