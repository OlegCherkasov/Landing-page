<template>
  <div class="card">
    <div class="card__description">
      <img
        :src="require(`@/assets/${cardsImage}.png`)"
        :alt="cardsText"
        height="228"
      />

      <p class="card__text mainFont">
        {{ cardsText }}
      </p>
    </div>
    <input class="button basicFont" type="button" :value="cardsButtonText" />
  </div>
</template>

<script>
export default {
  name: "ServiceCard",

  props: ["cardsText", "cardsButtonText", "cardsImage"],
};
</script>

<style scoped>
img {
  display: block;
}

.card {
  width: 322px;
  height: 356px;
  position: relative;
}

.card__description {
  height: 328px;
  background-color: white;
  border-radius: 30px;
}

.card__text {
  padding-top: 25px;
  text-transform: uppercase;
  color: #333;
  text-align: center;
}

.button {
  width: 180px;
  height: 56px;
  border-radius: 20px;
  border: none;
  background-color: #eb7598;
  position: absolute;
  bottom: 0;
  left: 71px;
  color: white;
}

.button:hover {
  background-color: #57ebba;
  color: red;
}
</style>