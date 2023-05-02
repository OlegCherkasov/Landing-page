<template>
  <div class="aboutAs">
    <DoubleTitle title="About Us" />
    <div class="aboutAs__todos">
      <AboutAsCard
        v-for="(item, index) in todos"
        :key="index"
        :text="item.text"
        :aboutMarker="index + 1"
        :aboutCardText="item.text"
      />
      <ButtonSection class="aboutAs__button" buttonText="More information" />
    </div>
  </div>
</template>

<script>
import DoubleTitle from "@/components/DoubleTitle.vue";
import AboutAsCard from "@/components/AboutAsCard.vue";
import ButtonSection from "@/components/ButtonSection.vue";

export default {
  name: "AboutAsSite",

  components: { DoubleTitle, AboutAsCard, ButtonSection },

  data() {
    return {
      todos: [
        {
          text: "1 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "2 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "3 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "4 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "5 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
        {
          text: "6 Lorem lpsum is symply dummy text of the printing and typesetting industri. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery",
        },
      ],
    };
  },
};
</script>

<style scoped>
.aboutAs {
  padding-top: 50px;
  padding-bottom: 100px;
  border-bottom-left-radius: 50% 12vh;
  border-bottom-right-radius: 50% 12vh;
  background-color: #f2f2f2;
}

.aboutAs__todos {
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1070px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
}

.aboutAs__button {
  padding-left: 25px;
}

@media (min-width: 768px) {
  .aboutAs__button {
    width: 100%;
  }
}
</style>