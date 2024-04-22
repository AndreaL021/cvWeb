
<template>
  <div class="text-center home" style="overflow: hidden">
    <h1 style="color: white" class="pt-5">Projects</h1>
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; height: 200px; background-color: grey"
    >
      <div class="col-12">
        <span class="link">Laravel App</span>
      </div>
      <div class="col-12"></div>
    </div>
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; height: 600px; background-color: grey"
    >
      <div class="col-12">
        <span class="link">Electron Vue App</span>
      </div>
      <div class="col-12">
        <video controls height="400px" :src="electron_vue_video"></video>
      </div>
      <div class="col-12">
        <p style="color: white">Desktop App in Electron and Vuejs</p>
        <p style="color: white">
          Tested on Windows 11
          <a class="link" href="../assets/ElectronVueApp/electron_vue_test_app_setup.exe" download="electron_vue_test_app_setup.exe"
            >Download</a
          >
        </p>
      </div>
    </div>
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; height: 200px; background-color: grey"
    >
      <div class="col-12">
        <router-link class="nav-link" to="/pokedex"
          ><span class="link">Pokedex</span></router-link
        >
      </div>
      <div class="col-12"></div>
    </div>
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; height: 200px; background-color: grey"
    >
      <div class="col-12">
        <router-link class="nav-link" to="/snake"
          ><span class="link">Snake</span></router-link
        >
      </div>
      <div class="col-12"></div>
    </div>
    <div
      class="row d-flex justify-content-center align-items-center text-center mt-5"
      style="padding: 10px; height: 200px; background-color: grey"
    >
      <div class="col-12 d-flex justify-content-center">
        <a
          class="nav-link"
          style="width: fit-content"
          href="https://andreal021.github.io/FirstGame/"
          target="_blank"
        >
          <span class="link">Flappy Bird</span>
        </a>
      </div>
      <div class="col-12"></div>
    </div>
  </div>
</template>
  <script>
import electron_vue_video from "@/assets/ElectronVueApp/ElectronVueVideo.mp4";
export default {
  data() {
    return {
      electron_vue_video,
    };
  },
  components: {},
  methods: {},
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
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.link:hover {
  color: gold;
  filter: drop-shadow(10px 10px 10px gold);
}
</style>
  