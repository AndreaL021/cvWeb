<template>
  <canvas
    style="border: solid 1px black"
    ref="canvas"
    :width="board_size_px"
    :height="board_size_px"
  ></canvas>
</template>
<script>
import constants from "./constants";
export default {
  name: "SnakeCanvas",
  data() {
    return {
      changeDirection: true,
      snake: [],
      interval: null
    };
  },
  props: {
    cell_size: Number,
    board_size: Number,
    speed: Number,
    isPlaying: Boolean,
    stop: Function,
    addScores: Function,
    scores: Number,
    resetScores: Function,
  },
  computed: {
    board_size_px() {
      return this.cell_size * this.board_size;
    },
  },
  mounted() {
    this.board_context = this.$refs.canvas.getContext("2d");
    window.addEventListener("keydown", this.onKeyPress);
    this.drawCommand();
  },
  created() {
    this.resetSnake();
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.onKeyPress);
  },
  watch: {
    isPlaying(value) {
      this.clear();
      if (value) {
        this.move();
      } else {
        this.resetSnake();
        this.drawCommand();
      }
    },
  },
  methods: {
    drawCommand() {
      this.board_context.beginPath();
      this.board_context.fillStyle = "black";
      this.board_context.font = "bold 18px Arial";
      this.board_context.fillText(
        "Press spacebar/enter to restart",
        10,
        this.getMiddleCell() * this.cell_size
      );
      this.board_context.fillText(
        "Movement: ↑ ← ↓ → | wasd",
        10,
        this.getMiddleCell() * this.cell_size + 20
      );
      this.board_context.closePath();
    },
    resetSnake() {
      this.direction = constants[0];
      console.log(this.snake);
      this.snake = [];
      console.log(this.snake);
      this.snake.push({
        x: this.getMiddleCell(),
        y: this.getMiddleCell(),
      });
      console.log(this.snake);
    },
    getMiddleCell() {
      console.log(Math.round(this.board_size / 2));
      return Math.round(this.board_size / 2);
    },
    move() {
      if (!this.isPlaying) {
        return;
      }

      this.clear();
      this.setTargetCell();
      const newHeadCell = {
        x: this.snake[0].x + this.direction.move.x,
        y: this.snake[0].y + this.direction.move.y,
      };

      if (
        this.isCellOutOfBoard(newHeadCell) ||
        this.amountCellsInSnake(this.snake[0]) > 1
      ) {
        this.stop();
        clearInterval(this.interval);
        this.resetScores();
        alert("Game over! You've scored " + this.scores + " points.");
      }

      if (this.isTargetNewHead()) {
        this.snake.unshift(this.target_cell);
        this.target_cell = null;
        this.addScores(this.speed);
      } else {
        this.snake.unshift(newHeadCell);
        this.snake.pop();
      }
      this.board_context.beginPath();
      this.snake.forEach(this.drawCell);
      this.board_context.closePath();

      this.changeDirection = true;

      this.interval=setTimeout(this.move, this.getMoveDelay());
    },

    clear() {
      this.board_context.clearRect(
        0,
        0,
        this.board_size_px,
        this.board_size_px
      );
    },
    drawCell({ x, y }) {
      this.board_context.rect(
        x * this.cell_size,
        y * this.cell_size,
        this.cell_size,
        this.cell_size
      );
      this.board_context.fillStyle = "green";
      this.board_context.fill();
    },
    getMoveDelay() {
      return (2 / Number(this.speed)) * 1000;
    },
    isCellOutOfBoard({ x, y }) {
      return x < 0 || y < 0 || x >= this.board_size || y >= this.board_size;
    },
    onKeyPress(event) {
      console.log(event);
      if (
        constants.filter((c) => c.keyCode == event.keyCode).length > 0 &&
        constants.find((c) => c.keyCode == event.keyCode).type == "start"
      ) {
        console.log("start");
        return this.stop();
      }
      if (this.changeDirection == false) {
        return;
      }
      const newDirection = constants.find((c) => c.keyCode === event.keyCode);
      if (!newDirection) {
        return;
      }
      // ↑ |← |↓ |→
      if (newDirection.type === "arrow") {
        if (Math.abs(newDirection.keyCode - this.direction.keyCode) !== 2) {
          this.direction = newDirection;
          this.changeDirection = false;
        }
      }
      // w -a -s -d
      if (newDirection.type === "wasd") {
        if (
          Math.abs(newDirection.keyCode - this.direction.keyCode) !== 3 &&
          Math.abs(newDirection.keyCode - this.direction.keyCode) !== 4
        ) {
          this.direction = newDirection;
          this.changeDirection = false;
        }
      }
    },
    setTargetCell() {
      if (!this.target_cell) {
        let target_cell = this.getRandomCell();
        while (this.amountCellsInSnake(target_cell) > 0) {
          target_cell = this.getRandomCell();
        }
        this.target_cell = target_cell;
      }
      this.board_context.beginPath();
      this.board_context.arc(
        this.target_cell.x * this.cell_size + 10,
        this.target_cell.y * this.cell_size + 10,
        this.cell_size / 2.2,
        0,
        2 * Math.PI
      );
      this.board_context.fillStyle = "gold";
      this.board_context.fill();
      this.board_context.strokeStyle = "black";
      this.board_context.lineWidth = 2;
      this.board_context.stroke();
      this.board_context.fill();
      this.board_context.closePath();
    },
    getRandomCell() {
      return {
        x: Math.floor(Math.random() * this.board_size),
        y: Math.floor(Math.random() * this.board_size),
      };
    },
    amountCellsInSnake(cell) {
      const cellsAmount = this.snake.filter(
        ({ x, y }) => x === cell.x && y === cell.y
      ).length;
      return cellsAmount;
    },
    isTargetNewHead() {
      return (
        this.snake[0].x + this.direction.move.x === this.target_cell.x &&
        this.snake[0].y + this.direction.move.y === this.target_cell.y
      );
    },
  },
};
</script>