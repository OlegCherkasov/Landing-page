<template>
  <div class="contact">
    <h1 class="contact__title basicFont">Contact Us</h1>
    <div class="setting">
      <div class="contact__form">
        <ContactInputName @getName="getName" />
        <ContactInputSurname @getSurname="getSurname" />
        <ContactInputPhone @getPhone="getPhone" />
        <ContactButton @click="sendData" />
      </div>
      <div class="contact__details">
        <a class="details basicFont" href="mailto:text@gmail.com">
          <img src="@/assets/post.svg" alt="post" height="24" />
          <p>text@gmail.com</p>
        </a>
        <a class="details basicFont" href="tel:+3035550105">
          <img src="@/assets/call.svg" alt="call" height="24" />
          <p>(303)555-0105</p>
        </a>
        <a
          class="details basicFont"
          href="https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD-%D0%A5%D0%BE%D1%81%D0%B5,+%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F,+%D0%A1%D0%A8%D0%90/@37.6660666,-121.8361603,9.19z/data=!4m10!1m2!2m1!1s2715+Ash+Dr.+San+Jose,+South+Dakota+83475!3m6!1s0x808fcae48af93ff5:0xb99d8c0aca9f717b!8m2!3d37.33874!4d-121.8852525!15sCikyNzE1IEFzaCBEci4gU2FuIEpvc2UsIFNvdXRoIERha290YSA4MzQ3NZIBCGxvY2FsaXR54AEA!16zL20vMGYwNHY?authuser=0&entry=ttu"
          target="_blank"
        >
          <img class="geo" src="@/assets/geo.svg" alt="geo" heigt="24" />
          <p class="geo">2715 Ash Dr. San Jose, California 83475</p>
        </a>
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
      loading: false,
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
      this.loading = true;
      this.send = val;
      console.log("send  " + this.send);
      // keys for backend
      const data = {
        PersonName: this.name,
        Surname: this.surname,
        Number: this.phone,
        Send: this.send,
      };
      // api post
      console.log(data);
      this.loading = false;
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
  font-size: 65px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.contact__details {
  margin-top: 30px;
  margin-right: 5vw;
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__input {
  width: 240px;
  height: 56px;
  border-radius: 28px;
  border: none;
  font-size: 24px;
  font-weight: 500;
  color: #e15252;
}

.pad {
  padding-left: 50px;
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
  text-decoration: none;
}

.geo {
  margin-left: 5px;
}

@media only screen and (min-width: 560px) {
  .contact__title {
    font-size: 96px;
  }
  .setting {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .contact__form {
    margin-left: 5vw;
  }
  .contact__details {
    align-items: initial;
  }
  .contact__input {
    width: 320px;
  }
}
</style>