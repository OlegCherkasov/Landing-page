<template>
  <div class="contact">
    <h1 class="contact__title basicFont">Contact Us</h1>
    <div class="contact__form">
      <input
        class="contact__input data basicFont"
        type="text"
        name="name"
        placeholder="You Name"
      />
      <input
        class="contact__input data basicFont"
        type="text"
        name="surename"
        placeholder="You Surename"
      />
      <input
        class="contact__input data basicFont"
        type="phone"
        name="phone"
        placeholder="+380..."
      />
      <input class="contact__input subm basicFont" type="submit" />
    </div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "ContactUsSite",
};
</script>

<style scoped>
.contact {
  margin: 60px auto;
  max-width: 1200px;
  padding: 50px 100px 140px;
  height: 648px;
  /* ВЫСОТА */
  background-color: #e15252;
  border-radius: 0 0 50px 50px;
}

.contact__title {
  font-size: 96px;
  font-weight: lighter;
  color: white;
  line-height: 100%;
  text-align: center;
}

.contact__form {
  max-width: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.contact__input {
  width: 374px;
  height: 56px;
  border-radius: 28px;
  border: none;
  display: block;
  font-size: 20px;
  font-weight: lighter;
}
.data {
  padding-left: 70px;
}
.subm {
  width: 168px;
  border: 3px solid white;
  background-color: #e15252;
  color: white;
  letter-spacing: 2px;
}

input::placeholder {
  color: #e15252;
  opacity: 60%;
}

input:focus-visible {
  outline-color: yellow;
}
</style>