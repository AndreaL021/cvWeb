
<template>
  <div class="text-center home" style="overflow: hidden">
    <h1 style="color: white">Projects</h1>
    <!-- LaravelApp -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div class="col-12">
        <a
          style="text-decoration: none"
          href="https://github.com/AndreaL021/Laravelecommerce"
          target="blank"
        >
          <span class="link myFont">Laravel App</span>
        </a>
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!laravel_ecommerce.expand"
          @click="laravel_ecommerce.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="laravel_ecommerce.expand"
          icon="fa-solid fa-chevron-up"
          @click="laravel_ecommerce.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        v-if="laravel_ecommerce.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      >
        <fa-i
          icon="fa-solid fa-chevron-left"
          @click="changeImage(-1)"
          style="color: white; font-size: 30px; margin-right: 5px"
        ></fa-i>
        <a href="https://github.com/AndreaL021/Laravelecommerce" target="blank">
          <img
            style="cursor: pointer"
            width="100%"
            :src="laravel_ecommerce.images[laravel_image_index]"
          />
        </a>
        <fa-i
          icon="fa-solid fa-chevron-right"
          @click="changeImage(+1)"
          style="color: white; font-size: 30px; margin-left: 5px"
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
      <div class="col-12">
        <a
          style="text-decoration: none"
          href="https://github.com/AndreaL021/test_electron_vue"
          target="blank"
        >
          <span class="link myFont">Electron Vue App</span>
        </a>
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!electron_vue.expand"
          @click="electron_vue.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="electron_vue.expand"
          icon="fa-solid fa-chevron-up"
          @click="electron_vue.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
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
        <router-link style="width: fit-content" class="nav-link" to="/pokedex"
          ><span class="link myFont">Pokedex</span></router-link
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!pokedex.expand"
          @click="pokedex.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="pokedex.expand"
          icon="fa-solid fa-chevron-up"
          @click="pokedex.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
        v-if="pokedex.expand"
      >
        <img
          style="cursor: pointer"
          width="100%"
          :src="pokedex.src"
          @click="$router.push('/pokedex')"
        />
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
        <router-link style="width: fit-content" class="nav-link" to="/snake"
          ><span class="link myFont">Snake</span></router-link
        >
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!snake.expand"
          @click="snake.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="snake.expand"
          icon="fa-solid fa-chevron-up"
          @click="snake.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
        v-if="snake.expand"
      >
        <img
          style="cursor: pointer"
          width="100%"
          :src="snake.src"
          @click="$router.push('/snake')"
        />
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
          <span class="link myFont">Flappy Bird</span>
        </a>
        <fa-i
          icon="fa-solid fa-chevron-down"
          v-if="!flappy_bird.expand"
          @click="flappy_bird.expand = true"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
        <fa-i
          v-if="flappy_bird.expand"
          icon="fa-solid fa-chevron-up"
          @click="flappy_bird.expand = false"
          style="color: white; font-size: 30px; margin-left: 10px"
        ></fa-i>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
        v-if="flappy_bird.expand"
      >
        <a
          style="width: fit-content"
          href="https://andreal021.github.io/FirstGame/"
          target="_blank"
        >
          <img width="100%" :src="flappy_bird.src" />
        </a>
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
    <!-- VueFramework -->
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; background-color: grey"
    >
      <div class="col-12">
        <!-- <a
          style="text-decoration: none"
          href="https://github.com/AndreaL021/Laravelecommerce"
          target="blank"
        > -->
        <span class="link myFont">Vue Framework (work in progress)</span>
        <!-- </a> -->
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
      <div
        v-if="framework.expand"
        class="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2"
      ></div>
      <div class="col-12 mt-3" v-if="framework.expand"></div>
    </div>
  </div>
</template>
<script>
import electron_vue_video from "@/assets/ElectronVueApp/ElectronVueVideo.mp4";
import flappy_bird_image from "@/assets/flappy_bird.png";
import pokedex_image from "@/assets/pokedex.png";
import laravel_badge from "@/assets/LaravelEcommerce/badge.png";
import laravel_homepage from "@/assets/LaravelEcommerce/homepage.png";
import laravel_create_announcement from "@/assets/LaravelEcommerce/create_announcement.png";
import laravel_register from "@/assets/LaravelEcommerce/register.png";
import laravel_revisor from "@/assets/LaravelEcommerce/revisor_page.png";
import snake_image from "@/assets/LaravelEcommerce/snake.png";
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
      electron_vue: {
        src: electron_vue_video,
        expand: false,
      },
      pokedex: {
        src: pokedex_image,
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
      framework: {
        src: null,
        expand: false,
      },
      laravel_image_index: 0,
    };
  },
  components: {},
  methods: {
    changeImage(n) {
      let newIndex = this.laravel_image_index + n;
      if (newIndex > this.laravel_ecommerce.images.length - 1) {
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
}
.myFont {
  font-family: "Jersey 10", sans-serif;
}
</style>
  