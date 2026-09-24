<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <span style="font-size: 30px" class="navbar-brand">Andrea Lopasso</span>
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
      <div
        ref="navbarSupportedContent"
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li v-for="section in sections" :key="section.id" class="nav-item">
            <router-link
              :to="{ name: 'home', hash: `#${section.id}` }"
              custom
              v-slot="{ href, navigate }"
            >
              <a
                :href="href"
                class="nav-link"
                :class="{ active: activeSection === section.id }"
                :aria-current="
                  activeSection === section.id ? 'location' : undefined
                "
                @click.prevent="handleNavigation(navigate)"
                >{{ section.label }}</a
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap'

export default {
  name: "NavBar",
  data() {
    return {
      activeSection: "",
      scrollFrame: null,
      layoutObserver: null,
      sections: [
        { id: "home", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
      ],
    };
  },
  watch: {
    "$route.fullPath"() {
      this.activeSection = "";
      this.$nextTick(this.scheduleSectionUpdate);
    },
  },
  methods: {
    handleNavigation(navigate) {
      const navbar = this.$refs.navbarSupportedContent;

      // Se il menu mobile è aperto
      if (navbar.classList.contains("show")) {
        const collapse = Collapse.getOrCreateInstance(navbar);

        // Aspetta che Bootstrap abbia FINITO di chiudere la navbar
        navbar.addEventListener(
          "hidden.bs.collapse",
          () => {
            navigate();
          },
          { once: true }
        );

        collapse.hide();
      } else {
        // Desktop o menu già chiuso
        navigate();
      }
    },
    scheduleSectionUpdate() {
      if (this.scrollFrame !== null) return;
      this.scrollFrame = requestAnimationFrame(() => {
        this.scrollFrame = null;
        this.updateActiveSection();
      });
    },
    updateActiveSection() {
      const viewportHeight = window.innerHeight;
      // Match the router's scroll offset, allowing for subpixel rounding.
      const activationLine = this.$el.getBoundingClientRect().bottom + 1;
      const visibleSections = this.sections
        .filter(({ id }) => this.$route.name === "home" || id === "contact")
        .map(({ id }) => ({ id, element: document.getElementById(id) }))
        .filter(({ element }) => element)
        .map(({ id, element }) => ({
          id,
          rect: element.getBoundingClientRect(),
        }))
        .filter(
          ({ rect }) =>
            rect.bottom > activationLine && rect.top < viewportHeight
        );

      // A short footer may never reach the navbar: select it at the page bottom.
      const atBottom =
        Math.ceil(window.scrollY + viewportHeight) >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && visibleSections.some(({ id }) => id === "contact")) {
        this.activeSection = "contact";
        return;
      }

      const current =
        visibleSections.find(({ rect }) => rect.top <= activationLine) ||
        visibleSections[0];
      this.activeSection = current?.id || "";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scheduleSectionUpdate, {
      passive: true,
    });
    window.addEventListener("resize", this.scheduleSectionUpdate);
    this.layoutObserver = new ResizeObserver(this.scheduleSectionUpdate);
    this.layoutObserver.observe(this.$el);
    document.querySelectorAll("main, footer").forEach((element) => {
      this.layoutObserver.observe(element);
    });
    this.scheduleSectionUpdate();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.scheduleSectionUpdate);
    window.removeEventListener("resize", this.scheduleSectionUpdate);
    this.layoutObserver?.disconnect();
    if (this.scrollFrame !== null) cancelAnimationFrame(this.scrollFrame);
  },
};
</script>
<style scoped>
nav {
  font-family: "Jersey 10", sans-serif;
}
li {
  font-size: 24px;
}
a:hover {
  background-color: transparent;
}
</style>
