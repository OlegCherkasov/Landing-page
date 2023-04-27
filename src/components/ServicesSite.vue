<template>
  <div class="services">
    <DoubleTitle title="Electric Services" />
    <div class="service__images">
      <div class="service__cards">
        <ServicesCard
          v-for="(card, index) in cards"
          :key="index"
          :cardsText="card.cardsText"
          :cardsButtonText="card.cardsButtonText"
          :cardsImage="card.cardsImage"
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
          cardsImage: "ServiceCards",
        },
        {
          cardsText: "stretching the ceiling",
          cardsButtonText: "You need",
          cardsImage: "ServiceCards",
        },
        {
          cardsText: "laminate flooring",
          cardsButtonText: "We need",
          cardsImage: "ServiceCards",
        },
        {
          cardsText: "wallpapering walls",
          cardsButtonText: "He need",
          cardsImage: "ServiceCards",
        },
        {
          cardsText: "door installation",
          cardsButtonText: "She need",
          cardsImage: "ServiceCards",
        },
        {
          cardsText: "furniture assembly",
          cardsButtonText: "They need",
          cardsImage: "ServiceCards",
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

.service__images {
  margin-top: 30px;
  border-top-left-radius: 50% 12vh;
  border-top-right-radius: 50% 12vh;
  background-color: #f2f2f2;
  padding: 60px 0 100px;
  display: flex;
  justify-content: center;
}

.service__cards {
  max-width: 1060px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
</style>