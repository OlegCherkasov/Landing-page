<template>
  <div class="contact">
    <h1 class="contact__title basicFont">Contact Us</h1>
    <div class="setting">
      <div class="contact__form">
        <ContactInputName @getName="getName" />
        <ContactInputSurname @getSurname="getSurname" />
        <ContactInputPhone @getPhone="getPhone" />
        <ContactButton @clickButton="sendData" />
      </div>
      <div class="contact__details">
        <div class="details basicFont">
          <img src="@/assets/post.svg" alt="post" height="24" />
          <p>text@gmail.com</p>
        </div>
        <div class="details basicFont">
          <img src="@/assets/call.svg" alt="call" height="24" />
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
import ContactButton from "@/components/ContactButton.vue";
import ContactInputPhone from "@/components/ContactInputPhone.vue";
import ContactInputSurname from "@/components/ContactInputSurname.vue";
import ContactInputName from "@/components/ContactInputName.vue";

export default {
  name: "ContactUsSite",
  components: {
    ContactButton,
    ContactInputPhone,
    ContactInputSurname,
    ContactInputName,
  },

  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      send: false,
    };
  },

  methods: {
    getName(val) {
      // if (val.length < 4) return;
      this.name = val;
      console.log("name  " + this.name);
    },

    getSurname(val) {
      this.surname = val;
      console.log("surname  " + this.surname);
    },

    getPhone(val) {
      this.phone = val;
      console.log("phone  " + this.phone);
    },

    sendData(val) {
      this.send = val;
      console.log("send  " + this.send);
      // keys for backend
      const data = {
        personName: this.name,
        Surname: this.surname,
        Number: this.phone,
        Send: this.send,
      };
      // api post
      console.log(data);
    },
  },
};
</script>

<style >
.contact {
  margin: 60px auto;
  max-width: 1200px;
  padding-bottom: 100px;
  background-color: #e15252;
  border-radius: 0 0 50px 50px;
}

.contact__title {
  padding-top: 100px;
  font-size: 96px;
  font-weight: lighter;
  color: white;
  line-height: 100%;
  text-align: center;
}

.setting {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
  margin-right: 5vw;
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

@media only screen and (min-width: 560px) {
  .setting {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  .contact__form {
    margin-left: 5vw;
  }
}
</style>