
<template>
  <div class="home" style="overflow: hidden; background-color: black">
    <canvas id="canvas" width="100vw" height="100vh"></canvas>
    <div
      style="color: white; background-color: goldenrod; overflow: hidden"
      v-motion
      :initial="{
        y: 270,
        opacity: 0,
      }"
      :visible-once="{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1300,
          ease: 'easeInOut',
        },
      }"
    >
      <div
        style="height: 300px"
        class="d-flex justify-content-around align-items-center"
      >
        <a :href="pdf" target="_blank" class="btn btn-lg resume-btn">Resume</a>
        <router-link class="btn btn-lg resume-btn ml-5" to="/projects"
          >Projects</router-link
        >
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
import svg from "@/assets/coding.svg";
export default {
  data() {
    return {
      svg,
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
    GearMotion,
  },
  methods: {},
  watch: {},
  mounted() {
    let w = window.innerWidth;
    let h = window.innerHeight + 100;
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let rate = 60;
    let arc = 30;
    let time;
    let size = 5;
    let speed = 20;
    let parts = new Array();
    let colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
    var mouse = { x: 0, y: 0 };
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);

    // Aggiungi un'immagine SVG di sfondo al canvas utilizzando CSS
    canvas.style.backgroundImage = `url(${svg})`;
    canvas.style.backgroundPosition = "center calc(50% + 70px)";
    canvas.style.backgroundRepeat = "no-repeat";
    checkScreen();
    function create() {
      time = 0;

      for (var i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    }
    function checkScreen() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h);
      if (w <= 576) {
        canvas.style.backgroundPosition = "center";
        canvas.style.backgroundSize = "80vw";
      } else {
        canvas.style.backgroundSize = "40vw";
        canvas.style.backgroundPosition = "center calc(50% + 70px)";
      }
    }
    function fillText() {
      let fontSize;
      let top=100
      if (w <= 576) {
        fontSize = "40px";
        top=150
      } else if (w <= 768) {
        fontSize = "50px";
        top=100
      } else {
        fontSize = "60px";
        top=100
      }
      ctx.font = fontSize + ' "Jersey 10", sans-serif'; // Imposta il font e la dimensione del testo
      ctx.fillStyle = "white"; // Imposta il colore del testo
      let text = "WEB DEVELOPER";
      let textWidth = ctx.measureText(text).width;
      ctx.fillText(text, (w - textWidth) / 2, top); // Disegna il testo
    }
    function particles() {
      ctx.clearRect(0, 0, w, h);

      checkScreen();
      fillText();

      canvas.addEventListener("mousemove", MouseMove, false);
      for (var i = 0; i < arc; i++) {
        var li = parts[i];
        var distanceFactor = DistanceBetween(mouse, parts[i]);
        var distanceFactor = Math.max(
          Math.min(15 - distanceFactor / 10, 10),
          1
        );
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 == 0) ctx.stroke();
        else ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) {
          li.x = 0;
        }
        if (li.y > h) {
          li.y = 0;
        }
        if (li.x < 0) {
          li.x = w;
        }
        if (li.y < 0) {
          li.y = h;
        }
      }
      if (time < speed) {
        time++;
      }
      setTimeout(particles, 1000 / rate);
    }
    function MouseMove(e) {
      mouse.x = e.layerX;
      mouse.y = e.layerY;

      //context.fillRect(e.layerX, e.layerY, 5, 5);
      //Draw( e.layerX, e.layerY );
    }
    function DistanceBetween(p1, p2) {
      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    create();
    particles();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jersey+10&display=swap");
canvas {
  overflow: hidden;
  background-color: black;
}
.resume-btn {
  background-color: white;
  font-weight: bold;
  font-style: italic;
  color: black;
}
.resume-btn:hover {
  animation-duration: 0.7s;
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 19px 12px #ffd700;
  box-shadow: 0px 0px 19px 12px #ffd700;
  font-weight: bold;
  font-style: italic;
  color: gold;
}
.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    rgb(128, 150, 0) 50%,
    rgb(0, 0, 0) 50%
  );
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}
.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}
.bg3 {
  animation-duration: 5s;
}
.bg3.fast-animation {
  animation-duration: 3s;
}
.bg4 {
  animation: slide2 3s ease-in-out infinite alternate;
  background-image: linear-gradient(
    -60deg,
    rgb(0, 0, 0) 50%,
    rgb(128, 150, 0) 50%
  );
  bottom: 0;
  animation-direction: alternate-reverse;
  animation-duration: 8s;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}
@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
@keyframes slide2 {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0%);
  }
}
.home {
  min-height: 100vh;
}
@media only screen and (max-width: 576px) {
  .home {
    min-height: 80vh;
    background-color: rgb(33, 37, 41);
  }
}
</style>
