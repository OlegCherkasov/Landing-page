<template>
  <div class="contact">
    <h1 class="contact__title basicFont">Contact Us</h1>
    <div class="setting">
      <form class="contact__form" method="post" action="">
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
          type="tel"
          name="phone"
          placeholder="+380..."
          required
        />
        <input
          class="contact__input subm basicFont"
          type="submit"
          value="send contact"
        />
      </form>
      <div class="contact__details">
        <div class="details basicFont">
          <img src="@/assets/post.svg" alt="post" heigt="24" />
          <p>text@gmail.com</p>
        </div>
        <div class="details basicFont">
          <img src="@/assets/call.svg" alt="call" heigt="24" />
          <p>(303)555-0105</p>
        </div>
        <div class="details basicFont">
          <img class="geo" src="@/assets/geo.svg" alt="geo" heigt="24" />
          <p class="geo">2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
      </div>
    </div>
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
  padding: 50px 100px 100px;
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

.setting {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 100px;
}

.contact__form {
  max-width: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.contact__details {
  margin-top: 30px;
  max-width: 314px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact__input {
  width: 374px;
  height: 56px;
  border-radius: 28px;
  border: none;
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #e15252;
}

.data {
  padding-left: 70px;
}

.subm {
  width: 168px;
  border: 3px solid white;
  background-color: #e15252;
  font-size: 16px;
  font-weight: lighter;
  color: white;
  letter-spacing: 2px;
  margin-top: 20px;
}

input::placeholder {
  color: #e15252;
  font-weight: lighter;
  font-size: 20px;
  opacity: 60%;
}

.contact__input:focus-visible {
  outline: 2px solid white;
  outline-offset: 3px;
}

.subm:hover {
  outline: 2px solid white;
  outline-offset: 3px;
}

.details {
  font-size: 13px;
  font-weight: 400;
  color: white;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
}

.geo {
  margin-left: 5px;
}
</style>