
<template>
  <div class="text-center home" style="overflow: hidden">
    <h1 style="color: white" class="pt-5">WEB DEVELOPER</h1>
    <div
      class="d-flex justify-content-center SVGContainer"
      style="padding: 10px"
    >
      <mySvg class="mySVG" />
    </div>
    <div style="color: white" v-motion-slide-visible-once-right>TEST</div>
    <div style="color: white" v-motion-fade-visible>fade</div>
    <div
      style="color: white; background-color: goldenrod; overflow: hidden;"
      v-motion
      :initial="{
        y: 100,
      }"
      :visible-once="{
        y: 0,
        transition: {
          duration: 400,
          ease: 'easeInOut',
        },
      }"
    >
      <div style="height: 300px;" class="d-flex justify-content-center align-items-center">
        <a :href="pdf" target="_blank" class="btn btn-lg" style="background-color: white; font-weight: bold; font-style: italic;">Resume</a>
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
          <div class="bg4"></div>
      </div>
    </div>
    <!-- <div
      style="color: white"
      v-motion
      :initial="{
        opacity: 0,
      }"
      :visible="{
        opacity: 1,
        transition: {
          duration: 1000,
          type: 'keyframes',
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }"
    >
      TEST
    </div> -->
    <!-- :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1.2 }"
    :delay="200" style="color: white;" -->
  </div>
</template>
<script>
import pdf from "@/assets/CV.pdf";
import GearMotion from "@/components/GearMotion.vue";
import mySvg from "@/components/CodingSVG.vue";
export default {
  data() {
    return {
      pdf,
      left: 50,
      top: 100,
      move: {
        x: "calc(70%)",
        y: "calc(0% - 25px)",
      },
    };
  },
  components: {
    mySvg,
    GearMotion,
  },
  methods: {
  },
  watch: {},
  mounted() {},
};
</script>
<style scoped>
.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgb(128, 150, 0) 50%, rgb(0, 0, 0) 50%);
  bottom: 0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top: 0;
  z-index:-1;
}
.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}
.bg3 {
  animation-duration:5s;
}
.bg3.fast-animation {
  animation-duration:3s;
}
.bg4 {
  animation:slide2 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgb(0, 0, 0) 50%, rgb(128, 150, 0) 50%);
  bottom: 0;
  animation-direction:alternate-reverse;
  animation-duration:8s;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top: 0;
  z-index:-1;
}
@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
@keyframes slide2 {
  0% {
    transform:translateX(50%);
  }
  100% {
    transform:translateX(0%);
  }
}
.home {
  background-color: rgb(33, 37, 41);
  min-height: 100vh;
}
.SVGContainer {
  height: 500px;
}
.mySVG {
  scale: 2;
  margin-top: 150px;
}
@media only screen and (max-width: 576px) {
  .home {
    min-height: 80vh;
    background-color: rgb(33, 37, 41);
  }
  .SVGContainer {
    height: 350px;
  }
  .mySVG {
    scale: 1.2;
    margin-top: 50px;
  }
}
</style>
