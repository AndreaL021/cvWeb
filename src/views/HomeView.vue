
<template>
  <div id="home" class="home" style="overflow: hidden; background-color: black">
    <div class="hero-canvas">
      <canvas id="canvas" width="100vw" height="100vh"></canvas>
      <div class="hero-content">
        <h1>Full Stack Web Developer</h1>
        <a :href="pdf" target="_blank" class="btn btn-lg hero-resume">
          <fa-i
            icon="fa-solid fa-download"
            class="link"
            style="font-size: 30px; margin-right: 20px"
          ></fa-i>
          Resume
        </a> <br>
        <a :href="pdfen" target="_blank" class="btn btn-lg hero-resume">
          <fa-i
            icon="fa-solid fa-download"
            class="link"
            style="font-size: 30px; margin-right: 20px"
          ></fa-i>
          Resume EN
        </a>
      </div>
    </div>
    <!-- <div
      style="color: white"
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
import pdfen from "@/assets/CVen.pdf";
import svg from "@/assets/coding.svg";
export default {
  data() {
    return {
      svg,
      pdf,
      pdfen,
      stopParticles: null,
      left: 50,
      top: 100,
      move: {
        x: "calc(70%)",
        y: "calc(0% - 25px)",
      },
    };
  },
  components: {},
  methods: {},
  watch: {},
  beforeUnmount() {
    this.stopParticles?.();
  },
  mounted() {
    let animationTimer;
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
    canvas.style.backgroundPosition = "center calc(55% + 80px)";
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
      } else if (w <= 768) {
        canvas.style.backgroundPosition = "center";
        canvas.style.backgroundSize = "60vw";
      } else {
        canvas.style.backgroundSize = "35vw";
        canvas.style.backgroundPosition = "center calc(60%+50px)";
      }
    }
    function particles() {
      ctx.clearRect(0, 0, w, h);

      checkScreen();


      for (var i = 0; i < arc; i++) {
        var li = parts[i];
        if (
          !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          var distanceFactor = DistanceBetween(mouse, parts[i]);
          var distanceFactor = Math.max(
            Math.min(15 - distanceFactor / 10, 10),
            1
          );
        } else {
          var distanceFactor = 3;
        }
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
      animationTimer = setTimeout(particles, 1000 / rate);
    }
    function MouseMove(e) {
      mouse.x = e.layerX;
      mouse.y = e.layerY;
    }
    function DistanceBetween(p1, p2) {
      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    canvas.addEventListener("mousemove", MouseMove, false);
    this.stopParticles = () => {
      clearTimeout(animationTimer);
      canvas.removeEventListener("mousemove", MouseMove, false);
    };
    create();
    particles();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jersey+10&display=swap");
canvas {
  display: block;
  overflow: hidden;
  background-color: black;
}
.hero-canvas {
  position: relative;
}
.hero-content {
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  pointer-events: none;
}
.hero-content h1 {
  margin: 0 0 20px;
  color: white;
  font-family: "Jersey 10", sans-serif;
  font-size: clamp(40px, 6vw, 60px);
  line-height: 1.1;
  text-transform: uppercase;
}
.hero-resume {
  pointer-events: auto;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  background-color: white;
  font-weight: bold;
  font-style: italic;
  color: black;
  margin-top: 10px;
  width: 200px;
}
.hero-resume:hover,
.hero-resume:focus-visible {
  background-color: #0d6efd;
  color: white;
}
</style>
