<template>
  <div class="services">
    <DoubleTitle
      class="service__title"
      title="Electric Services"
      subtitle="only the best"
    />
    <div class="service__img">
      <div class="service__cards">
        <ServicesCard
          v-for="(card, index) in cards"
          :key="index"
          :cardsText="card.cardsText"
          :cardsButtonText="card.cardsButtonText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DoubleTitle from "@/components/DoubleTitle.vue";
import ServicesCard from "@/components/ServicesCard.vue";

export default {
  name: "ServiceSite",
  components: {
    DoubleTitle,
    ServicesCard,
  },

  data() {
    return {
      cards: [
        {
          cardsText: "replacing sockets",
          cardsButtonText: "I need",
          cardsImage: "",
        },
        {
          cardsText: "stretching the ceiling",
          cardsButtonText: "You need",
          cardsImage: "",
        },
        {
          cardsText: "laminate flooring",
          cardsButtonText: "We need",
          cardsImage: "",
        },
        {
          cardsText: "wallpapering walls",
          cardsButtonText: "He need",
          cardsImage: "",
        },
        {
          cardsText: "door installation",
          cardsButtonText: "She need",
          cardsImage: "",
        },
        {
          cardsText: "furniture assembly",
          cardsButtonText: "They need",
          cardsImage: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  padding-top: 50px;
}

.service__title {
  max-width: 791px;
  height: 134px;
  margin-left: 15%;
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