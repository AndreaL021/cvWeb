<template>
    <div style="height: 300px; background-color: red">
      <!-- v-motion
        :initial="{
          rotate: 0,
        }"
        :visible="{
          rotate: 1080,
          transition: {
            duration: 3000,
            ease: 'linear',
            type: 'keyframes',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }" -->
  <canvas
    style="border: solid 1px black"
    ref="canvas"
    width="100px"
    height="100px"
  ></canvas>
      <fa-i
        icon="fa-solid fa-gear"
        style="
          color: grey;
          font-size: 100px;
          opacity: 1;
          position: relative;
          left: 0px;
          top: calc(90%);
        "
        v-motion
      ></fa-i>
      <fa-i
        @mousewheel="test2"
        v-drag="dragHandler"
        icon="fa-solid fa-gear"
        :style="{
          color: 'grey',
          fontSize: '100px',
          opacity: 1,
          position: 'absolute',
          top: 'calc(20%)',
          left: '70px',
        }"
        v-motion
        :initial="{
          rotate: 30,
        }"
      ></fa-i>
      <!-- :delay="300"
        :initial="{
          // x: 0,
          // y: 0,
          rotate: 0,
        }"
        :visible="{
          rotate: 1080,
          // x:100,
          // y:500,
          // y: 100,
          // x: 500,
          transition: {
            duration: 5000,
            ease: 'easeInOut',
            type: 'keyframes',
            repeat: Infinity,
            repeatType: 'mirror',
          },
        }" -->
      <!-- v-motion
        :delay="300"
        :initial="{
          rotate: 0,
        }"
        :visible="{
          rotate: 1080,
          transition: {
            duration: 30000,
            ease: 'easeInOut',
            type: 'keyframes',
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 100,
          },
        }" -->
      <!-- /* v-motion
    :delay="300"
    :initial="{
      rotate:0
    }"
    :hovered="{
      rotate: 1080,
      transition: {
        ease: 'easeInOut',
        type: 'keyframes',
      },
    }" */ -->
      <fa-i
        icon="fa-solid fa-gear"
        style="
          color: grey;
          font-size: 75px;
          opacity: 1;
          z-index: 6;
          position: absolute;
          top: 100px;
          left: 800px;
        "
        v-motion
        :delay="300"
        :initial="{
          rotate: 0,
        }"
        :visible="{
          rotate: 1080,
          transition: {
            duration: 30000,
            ease: 'easeInOut',
            type: 'keyframes',
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 100,
          },
        }"
      ></fa-i>
    </div>
</template>
<script>
export default {
  data() {
    return {
      left: 50,
      top: 100,
      context: null,
      move: {
        x: "calc(70%)",
        y: "calc(0% - 25px)",
      },
    };
  },
  components: {},
  methods: {
    test2(e) {
      console.log(e);
      this.top += e.deltaY;
      this.move.y += e.deltaY;
      console.log(this.move.y);
    },
    dragHandler({ dragging, movement }) {
      // console.log('this.move:');console.log(this.move);
      console.log(movement);
      // console.log('dragging:');console.log(dragging);
      this.move.x = "calc(70% " + Math.round(movement[0]) + ")";
      this.move.y = "calc(50% - 50px)" + this.top + Math.round(movement[1]);
      if (!dragging) {
        this.left = this.move.x;
        this.top = this.move.y;
      }
    },
  },
  watch: {},
  mounted() {
    this.context = this.$refs.canvas.getContext("2d");
    this.context.font='14px FontAwesome';
    this.context.fillText('/uF047', 20, 50)
  },
};
</script>
<style scoped>
</style>
