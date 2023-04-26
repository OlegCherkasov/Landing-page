<template>
  <div class="card">
    <div class="card__description">
      <img src="@/assets/ServiceCards.png" alt="image repair" />
      <p class="card__description--text mainFont">replasing sockets</p>
    </div>
    <input class="button basicFont" type="button" value="I need" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  display: block;
}

.card {
  width: 322px;
  height: 356px;
}

.card__description {
  height: 328px;
  background-color: white;
  border-radius: 30px;
  display: block;
}

.card__description--text {
  padding-top: 25px;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
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
  position: relative;
  top: -28px;
  left: 71px;
  color: white;
}

.button:hover {
  background-color: #57ebba;
  color: red;
}
</style>