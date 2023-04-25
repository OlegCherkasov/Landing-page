<template>
  <div class="services">
    <DoubleTitle class="service__title" />
    <div class="service__img">
      <div class="service__cards">
        <ServicesCard v-for="index in 6" :key="index" />
      </div>
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

.service__title {
  margin-left: 350px;
}
.service__img {
  margin-top: 30px;
  background-color: #f2f2f2;
  padding: 60px 0 100px;
  display: flex;
  justify-content: center;
}

.service__cards {
  max-width: 1046px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}
</style>