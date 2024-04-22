

<template>
  <header>
    <nav-bar />
  </header>
  <main style="min-height: 80vh;">
    <RouterView />
  </main>
  <footer>
    <footer-bar />
  </footer>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {};
  },
  created(){
    alert('Page under development');
  }
};
</script>
<style>
body {
  padding-top: 50px;
}
</style>
