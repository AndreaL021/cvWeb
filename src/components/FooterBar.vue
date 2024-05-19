<template>
  <div
    style="background-color: rgb(33, 37, 41); color: white"
    class="sticky-bottom container-fluid py-3"
  >
    <div class="text-center" style="font-size: 25px">Contacts</div>
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-8 col-lg-5" v-if="form">
        <input
          v-model="form_data.access_key"
          autocomplete="access_key"
          type="hidden"
        />
        <div class="form-group text-center mt-2">
          <input
            v-model="form_data.name"
            name="name"
            autocomplete="name"
            required
            type="text"
            class="form-control"
            placeholder="Name"
          />
        </div>
        <div class="form-group text-center mt-2">
          <input
            v-model="form_data.email"
            autocomplete="email"
            name="email"
            required
            type="email"
            class="form-control"
            placeholder="email@example.com"
          />
        </div>
        <div class="form-group text-center mt-2">
          <textarea
            v-model="form_data.message"
            name="message"
            class="form-control"
            rows="3"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div class="form-group mt-2">
          <button
            @click="submitForm()"
            :class="['btn', 'btn-primary', 'form-control', 'text-center']"
          >
            <span style="margin-right: auto; font-size: 24px"> Submit </span>
          </button>
        </div>
        <div
          style="background-color: transparent; border: none"
          class="h-captcha form-control p-0 mt-1 d-flex justify-content-center align-items-center"
          data-captcha="true"
        ></div>
      </div>
      <div class="col-8 col-lg-5" v-else>
        <div class="text-center" style="font-size: 20px">
          Email sent succesfully
          <fa-i icon="fa-solid fa-check" style="color: greenyellow"></fa-i>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center mt-4" style="font-size: 24px">
      <div class="col-1">
        <a
          href="https://www.linkedin.com/in/andrea-lopasso-050a28225/"
          target="_blank"
          ><fa-i
            icon="fa-brands fa-linkedin"
            :beat="linkedin_beat"
            @mouseover="linkedin_beat = true"
            @mouseleave="linkedin_beat = false"
            style="color: white"
          ></fa-i>
        </a>
      </div>
      <div class="col-1">
        <a href="https://www.instagram.com/andrea_lopasso_web_developer/" target="_blank"
          ><fa-i
            icon="fa-brands fa-instagram"
            :beat="ig_beat"
            @mouseover="ig_beat = true"
            @mouseleave="ig_beat = false"
            style="color: white"
          ></fa-i>
        </a>
      </div>
      <div class="col-1">
        <a href="https://vcard.link/card/DYUT.vcf" download>
          <fa-i
            icon="fa-solid fa-phone"
            :beat="phone_beat"
            @mouseover="phone_beat = true"
            @mouseleave="phone_beat = false"
            style="color: white"
          ></fa-i>
        </a>
      </div>
      <div class="col-1">
        <a href="mailto:lopassoandrea1@gmail.com">
          <fa-i
            icon="fa-regular fa-envelope"
            :beat="email_beat"
            @mouseover="email_beat = true"
            @mouseleave="email_beat = false"
            style="color: white"
          ></fa-i>
        </a>
      </div>
    </div>
    <div v-show="overlay" class="overlay">
      <fa-i icon="fas fa-spinner" spin-pulse></fa-i>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBar",
  data() {
    return {
      overlay: false,
      ig_beat: false,
      linkedin_beat: false,
      phone_beat: false,
      email_beat: false,
      overlay: false,
      form: true,
      form_data: {
        name: "",
        email: "",
        message: "",
        access_key: "19c76901-a60c-4c22-b3dd-b65aa25b92b2",
        "h-captcha-response": "",
      },
    };
  },
  methods: {
    checkForm() {
      if (!document.querySelector("textarea[name=h-captcha-response]")) {
        alert("Error, reload required");
        return false;
      }
      this.form_data["h-captcha-response"] = document.querySelector(
        "textarea[name=h-captcha-response]"
      ).value;
      if (this.form_data.name == "") {
        return false;
      }
      if (this.form_data.email == "" && this.form_data.email.includes("@")) {
        return false;
      }
      if (this.form_data.message == "") {
        return false;
      }
      if (
        this.form_data["h-captcha-response"] == "" ||
        this.form_data["h-captcha-response"] == null
      ) {
        alert("Please fill out captcha field");
        return false;
      }
      return true;
    },
    async submitForm() {
      if (!this.checkForm()) {
        return;
      }
      this.overlay = true;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.form_data),
      });
      console.log(response);
      const result = await response.json();
      if (result.success) {
        this.form = false;
      }
      this.overlay = false;
    },
  },
  watch: {
    overlay(newValue) {
      if (newValue) {
        document.body.classList.add("body-no-scroll");
      } else {
        document.body.classList.remove("body-no-scroll");
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", function (event) {
      if (event.code === "Space") {
        event.preventDefault();
      }
    });
  },
};
</script>
<style scoped>
a:hover {
  filter: drop-shadow(7px 7px 0 black);
}
</style>