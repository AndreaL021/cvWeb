<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <span class="navbar-brand">Andrea Lopasso</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              ><fa-i
                icon="fa-house"
                :beat="home_beat"
                @mouseover="home_beat = true"
                @mouseleave="home_beat = false"
              ></fa-i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/snake">Snake</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pokedex">Pokedex</router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <a :href="pdf" target="_blank" class="btn btn-primary">Resume</a>
      </div>
    </div>
  </nav>
</template>

<script>
import pdf from "@/assets/CV.pdf";

export default {
  name: "NavBar",
  data() {
    return {
      pdf,
      home_beat: false,
    };
  },
  mounted() {
  },
};
</script>
<style scoped>
a:hover {
  background-color: transparent;
}
</style>