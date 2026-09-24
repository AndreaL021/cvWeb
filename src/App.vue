

<template>
  <header>
    <nav-bar />
  </header>
  <main style="min-height: 80vh">
    <RouterView />
  </main>
  <footer id="contact">
    <footer-bar />
  </footer>
</template>
<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
    RouterView,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style>
body {
  padding-top: 70px;
}
</style>
