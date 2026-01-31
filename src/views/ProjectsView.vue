
<template>
  <div class="text-center home" style="overflow: hidden">
    <h1 style="color: white">Projects</h1>
    <!-- IonicVue WebApp -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/segna_presenze_fe"
          target="_blank"
        >
          <span style="color: white; margin-right: 10px"> FE</span>
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 20px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/segna_presenze_be"
          target="_blank"
        >
          <span style="color: white; margin-right: 10px"> BE</span>
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 20px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="/readme.txt"
          download
        >
          <span style="color: white"> readme </span>
          <fa-i
            icon="fa-solid fa-download"
            class="link"
            style="font-size: 30px; margin-right: 20px"
          ></fa-i>
        </a>

        <span
          class="link myFont"
          @click="ionic_web_app.expand = !ionic_web_app.expand"
          >IonicVue + Nestjs WebApp</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          class="link"
          v-if="!ionic_web_app.expand"
          @click="ionic_web_app.expand = true"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="ionic_web_app.expand"
          icon="fa-solid fa-chevron-up"
          class="link"
          @click="ionic_web_app.expand = false"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        v-if="ionic_web_app.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      >
        <fa-i
          icon="fa-solid fa-chevron-left"
          class="link"
          @click="changeIonicImage(-1)"
          style="font-size: 30px; margin-right: 5px"
        ></fa-i>
        <div
          class="myFont"
          @click="framework.expand = !framework.expand"
          style="
            display: flex;
            flex-direction: column;
            font-size: 30px;
            color: white;
          "
        >
          (work in progress)
          <img
            style="cursor: pointer"
            width="100%"
            :src="ionic_web_app.images[ionic_web_app_image_index]"
          />
        </div>
        <fa-i
          class="link"
          icon="fa-solid fa-chevron-right"
          @click="changeIonicImage(+1)"
          style="font-size: 30px; margin-left: 5px"
        ></fa-i>
      </div>
    </div>
    <!-- Flowchart Editor -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div class="col-12 d-flex justify-content-center align-items-center mt-2">
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://andreal021.github.io/FlowchartEditor/"
          target="_blank"
        >
          <fa-i
            icon="fa-solid fa-arrow-up-right-from-square"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/FlowchartEditor"
          target="_blank"
        >
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <span class="link myFont" @click="flowchart.expand = !flowchart.expand"
          >Flowchart Editor</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!flowchart.expand"
          @click="flowchart.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="flowchart.expand"
          icon="fa-solid fa-chevron-up"
          @click="flowchart.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        v-if="flowchart.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      >
        <img width="100%" :src="flowchart.src" />
      </div>
      <div class="col-12 mt-3" v-if="flowchart.expand"></div>
    </div>
    <!-- Laravel12App -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://laravel12-ecommerce-main-olsbl8.laravel.cloud/"
          target="_blank"
        >
          <fa-i
            icon="fa-solid fa-arrow-up-right-from-square"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/laravel12-ecommerce"
          target="_blank"
        >
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <span
          class="link myFont"
          @click="laravel_ecommerce_new.expand = !laravel_ecommerce_new.expand"
          >Laravel 12 + Alpine Ecommerce</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          class="link"
          v-if="!laravel_ecommerce_new.expand"
          @click="laravel_ecommerce_new.expand = true"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="laravel_ecommerce_new.expand"
          icon="fa-solid fa-chevron-up"
          class="link"
          @click="laravel_ecommerce_new.expand = false"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        v-if="laravel_ecommerce_new.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      >
        <fa-i
          icon="fa-solid fa-chevron-left"
          class="link"
          @click="changeLaravelNewImage(-1)"
          style="font-size: 30px; margin-right: 5px"
        ></fa-i>
        <img
          style="cursor: pointer"
          width="100%"
          :src="laravel_ecommerce_new.images[laravel_new_image_index]"
        />
        <fa-i
          class="link"
          icon="fa-solid fa-chevron-right"
          @click="changeLaravelNewImage(+1)"
          style="font-size: 30px; margin-left: 5px"
        ></fa-i>
      </div>
    </div>
    <!-- VueFramework -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      >
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://andreal021.github.io/VueFramework/"
          target="_blank"
        >
          <fa-i
            icon="fa-solid fa-arrow-up-right-from-square"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/VueFramework"
          target="_blank"
        >
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <span class="link myFont" @click="framework.expand = !framework.expand"
          >Vue Framework (work in progress)</span
        >
        <!-- <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!framework.expand"
          @click="framework.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="framework.expand"
          icon="fa-solid fa-chevron-up"
          @click="framework.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i> -->
      </div>
      <!-- <div
        v-if="framework.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      ></div>
      <div class="col-12 mt-3" v-if="framework.expand"></div> -->
    </div>
    <!-- LaravelApp -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/Laravelecommerce"
          target="_blank"
        >
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <span
          class="link myFont"
          @click="laravel_ecommerce.expand = !laravel_ecommerce.expand"
          >Laravel 8 + Bootstrap Ecommerce</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          class="link"
          v-if="!laravel_ecommerce.expand"
          @click="laravel_ecommerce.expand = true"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="laravel_ecommerce.expand"
          icon="fa-solid fa-chevron-up"
          class="link"
          @click="laravel_ecommerce.expand = false"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        v-if="laravel_ecommerce.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      >
        <fa-i
          icon="fa-solid fa-chevron-left"
          class="link"
          @click="changeLaravelImage(-1)"
          style="font-size: 30px; margin-right: 5px"
        ></fa-i>
        <img
          style="cursor: pointer"
          width="100%"
          :src="laravel_ecommerce.images[laravel_image_index]"
        />
        <fa-i
          icon="fa-solid fa-chevron-right"
          class="link"
          @click="changeLaravelImage(+1)"
          style="font-size: 30px; margin-left: 5px"
        ></fa-i>
      </div>
      <div class="col-12 mt-3" v-if="laravel_ecommerce.expand">
        <p
          style="color: white"
          class="d-flex justify-content-center align-items-center"
        >
          Laravel app | &nbsp
          <fa-i
            icon="fa-brands fa-laravel"
            style="color: orangered; font-size: 30px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-bootstrap"
            style="color: purple; font-size: 30px"
          ></fa-i>
        </p>
      </div>
    </div>
    <!-- ElectronVueApp -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <a
          class="nav-link"
          style="width: fit-content"
          href="../assets/ElectronVueApp/electron_vue_test_app_setup.exe"
          download="electron_vue_test_app_setup.exe"
        >
          <fa-i
            icon="fa-solid fa-download"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/test_electron_vue"
          target="_blank"
        >
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <span
          class="link myFont"
          @click="electron_vue.expand = !electron_vue.expand"
          >Electron Vue App</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          class="link"
          v-if="!electron_vue.expand"
          @click="electron_vue.expand = true"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="electron_vue.expand"
          class="link"
          icon="fa-solid fa-chevron-up"
          @click="electron_vue.expand = false"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div class="col-12 col-md-6" v-if="electron_vue.expand">
        <video controls style="max-width: 100%" :src="electron_vue.src"></video>
      </div>
      <div class="col-12" v-if="electron_vue.expand">
        <p style="color: white">
          Desktop App in Electron and Vuejs |
          <fa-i
            icon="fa-solid fa-atom"
            style="color: blue; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-vuejs"
            style="color: green; font-size: 30px; margin-left: 5px"
          ></fa-i>
        </p>
        <p style="color: white">
          Tested on Windows 11
          <a
            class="link"
            style="font-size: 30px"
            href="../assets/ElectronVueApp/electron_vue_test_app_setup.exe"
            download="electron_vue_test_app_setup.exe"
            >Download installer</a
          >
        </p>
      </div>
    </div>
    <!-- Pokedex -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <router-link style="width: fit-content" class="nav-link" to="/pokedex">
          <fa-i
            icon="fa-solid fa-arrow-up-right-from-square"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </router-link>
        <span class="link myFont" @click="pokedex.expand = !pokedex.expand"
          >Pokedex</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          class="link"
          v-if="!pokedex.expand"
          @click="pokedex.expand = true"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="pokedex.expand"
          icon="fa-solid fa-chevron-up"
          class="link"
          @click="pokedex.expand = false"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
        v-if="pokedex.expand"
      >
        <img style="cursor: pointer" width="100%" :src="pokedex.src" />
      </div>
      <div class="col-12 mt-3" v-if="pokedex.expand">
        <p
          style="color: white"
          class="d-flex justify-content-center align-items-center"
        >
          <a style="color: white" href="https://pokeapi.co/">Pokemon Api</a>
          &nbsp |
          <fa-i
            icon="fa-brands fa-bootstrap"
            style="color: purple; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-vuejs"
            style="color: green; font-size: 30px; margin-left: 5px"
          ></fa-i>
        </p>
      </div>
    </div>
    <!-- Snake -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <router-link style="width: fit-content" class="nav-link" to="/snake">
          <fa-i
            icon="fa-solid fa-arrow-up-right-from-square"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </router-link>
        <span class="link myFont" @click="snake.expand = !snake.expand"
          >Snake</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          class="link"
          v-if="!snake.expand"
          @click="snake.expand = true"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="snake.expand"
          class="link"
          icon="fa-solid fa-chevron-up"
          @click="snake.expand = false"
          style="font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
        v-if="snake.expand"
      >
        <img style="cursor: pointer" width="100%" :src="snake.src" />
      </div>
      <div class="col-12 mt-3" v-if="snake.expand">
        <p
          style="color: white"
          class="d-flex justify-content-center align-items-center"
        >
          Work on desktop and mobile |
          <fa-i
            icon="fa-brands fa-html5"
            style="color: orangered; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-css3-alt"
            style="color: blue; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-js"
            style="color: yellow; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-vuejs"
            style="color: green; font-size: 30px; margin-left: 5px"
          ></fa-i>
        </p>
      </div>
    </div>
    <!-- Flappy bird -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div
        class="col-12 d-flex justify-content-center align-items-center text-center"
      >
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://andreal021.github.io/FirstGame/"
          target="_blank"
        >
          <fa-i
            icon="fa-solid fa-arrow-up-right-from-square"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://github.com/AndreaL021/FirstGame"
          target="_blank"
        >
          <fa-i
            icon="fa-brands fa-github"
            class="link"
            style="font-size: 30px; margin-right: 30px"
          ></fa-i>
        </a>
        <span
          @click="flappy_bird.expand = !flappy_bird.expand"
          class="link myFont"
          >Flappy Bird</span
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!flappy_bird.expand"
          @click="flappy_bird.expand = true"
          style="font-size: 30px; margin-left: 10px"
          class="link"
        ></fa-i>
        <fa-i
          v-if="flappy_bird.expand"
          icon="fa-solid fa-chevron-up"
          @click="flappy_bird.expand = false"
          style="font-size: 30px; margin-left: 10px"
          class="link"
        ></fa-i>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
        v-if="flappy_bird.expand"
      >
        <img width="100%" :src="flappy_bird.src" />
      </div>
      <div class="col-12 mt-3" v-if="flappy_bird.expand">
        <p
          style="color: white"
          class="d-flex justify-content-center align-items-center"
        >
          Work on desktop and mobile |
          <fa-i
            icon="fa-brands fa-html5"
            style="color: orangered; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-css3-alt"
            style="color: blue; font-size: 30px; margin-left: 5px"
          ></fa-i>
          <fa-i
            icon="fa-brands fa-js"
            style="color: yellow; font-size: 30px; margin-left: 5px"
          ></fa-i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import electron_vue_video from "@/assets/ElectronVueApp/ElectronVueVideo.mp4";
import flappy_bird_image from "@/assets/flappy_bird.png";
import flowchart_image from "@/assets/flowchart.png";
import pokedex_image from "@/assets/pokedex.png";
import laravel_badge from "@/assets/LaravelEcommerce/badge.png";
import laravel_homepage from "@/assets/LaravelEcommerce/homepage.png";
import laravel_create_announcement from "@/assets/LaravelEcommerce/create_announcement.png";
import laravel_register from "@/assets/LaravelEcommerce/register.png";
import laravel_revisor from "@/assets/LaravelEcommerce/revisor_page.png";
import snake_image from "@/assets/LaravelEcommerce/snake.png";
import laravel_new_login from "@/assets/Laravel12/login.png";
import laravel_new_home from "@/assets/Laravel12/home.png";
import laravel_new_create from "@/assets/Laravel12/create.png";
import web_app_attendance from "@/assets/SegnaPresenze/attendance.png";
import web_app_users from "@/assets/SegnaPresenze/users.png";
export default {
  data() {
    return {
      snake: {
        src: snake_image,
        expand: false,
      },
      flappy_bird: {
        src: flappy_bird_image,
        expand: false,
      },
      flowchart: {
        src: flowchart_image,
        expand: false,
      },
      electron_vue: {
        src: electron_vue_video,
        expand: false,
      },
      pokedex: {
        src: pokedex_image,
        expand: false,
      },
      ionic_web_app: {
        images: [web_app_attendance, web_app_users],
        expand: false,
      },
      laravel_ecommerce_new: {
        images: [laravel_new_login, laravel_new_home, laravel_new_create],
        expand: false,
      },
      laravel_ecommerce: {
        images: [
          laravel_homepage,
          laravel_register,
          laravel_create_announcement,
          laravel_badge,
          laravel_revisor,
        ],
        expand: false,
      },
      laravel_image_index: 0,
      laravel_new_image_index: 0,
      ionic_web_app_image_index: 0,
      framework: {
        src: null,
        expand: false,
      },
    };
  },
  components: {},
  methods: {
    changeIonicImage(n) {
      let newIndex = this.ionic_web_app_image_index + n;
      if (newIndex >= this.ionic_web_app.images.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = this.ionic_web_app.images.length - 1;
      }
      this.ionic_web_app_image_index = newIndex;
    },
    changeLaravelNewImage(n) {
      let newIndex = this.laravel_new_image_index + n;
      if (newIndex >= this.laravel_ecommerce_new.images.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = this.laravel_ecommerce_new.images.length - 1;
      }
      this.laravel_new_image_index = newIndex;
    },
    changeLaravelImage(n) {
      let newIndex = this.laravel_image_index + n;
      if (newIndex >= this.laravel_ecommerce.images.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = this.laravel_ecommerce.images.length - 1;
      }
      this.laravel_image_index = newIndex;
    },
  },
  watch: {},
  mounted() {},
};
</script>
  <style scoped>
.home {
  background-color: rgb(33, 37, 41);
  min-height: 100vh;
}
.link {
  font-size: 33px;
  color: white;
}
.link:hover {
  color: gold;
  filter: drop-shadow(10px 10px 10px gold);
  cursor: pointer;
}
.myFont {
  font-family: "Jersey 10", sans-serif;
}
</style>
  