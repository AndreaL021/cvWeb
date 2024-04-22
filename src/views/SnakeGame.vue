<template>
  <div class="container pt-2" style="text-align: center">
    <h1>SNAKE</h1>
    <div class="container">
      <div v-if="desktop" class="row d-flex justify-content-center">
        <div class="col-8 col-lg-4">
          <div>Cell size (px):</div>
          <input type="number" min="10" v-model.number="cell_size" />
        </div>
        <div class="col-8 col-lg-4">
          <div>Board size(cells):</div>
          <input type="number" min="15" v-model.number="board_size" />
        </div>
        <div class="col-8 col-lg-4">
          <div>Speed:</div>

          <input type="number" min="1" v-model.number="speed" />
        </div>
      </div>
      <div class="mt-5">
        <!-- :key="board_size" -->
        <SnakeCanvas
          :key="board_size"
          :cell_size="cell_size"
          :board_size="board_size"
          :speed="speed"
          :isPlaying="isPlaying"
          :stop="start"
          :addScores="addScores"
          :scores="scores"
          :resetScores="resetScores"
        />
      </div>
      <div class="my-2" style="display: inline-block">
        <span style="width: 50%">Scores: {{ scores }}</span>
        <span style="width: 50%; margin-left: 100px">
          <button @click="start" class="btn btn-success" style="width: 70px">
            {{ isPlaying ? "Stop" : "Play" }}
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import SnakeCanvas from "@/components/SnakeCanvas/SnakeCanvas.vue";

export default {
  name: "App",
  components: {
    SnakeCanvas,
  },
  data() {
    return {
      desktop:true,
      cell_size: 20,
      board_size: 17,
      speed: 10,
      scores: 0,
      isPlaying: false,
    };
  },
  methods: {
    start() {
      if (this.isPlaying == true) {
        this.isPlaying = false;
      } else {
        this.isPlaying = true;
      }
    },
    resetScores() {
      this.scores = 0;
    },
    addScores(scores) {
      this.scores += scores;
    },
  },
  mounted(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.desktop=false
    }
  }
};
</script>