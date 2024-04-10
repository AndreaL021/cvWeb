<template>
  <!-- <div style="border: solid black 1px;"> -->
  <div
    style="
      border: solid black 1px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
      overflow: visible;
      position: relative; /* Cambiato in position: relative */
    "
  >
    <input
      @focus="dropdown = true"
      @focusout="dropdown = false"
      style="width: 100%"
      type="text"
      :value="modelValue.name"
      @input="updateModelValue($event.target.value)"
    />
    <fa-i
      style="width: 20px"
      @click="dropdown = !dropdown"
      color="#0d6efd"
      icon="fa-solid fa-magnifying-glass"
    ></fa-i>
    <!-- <select name="poke_select">
      <option v-for="(p, i) in filteredPokemon" :key="i">{{ p.name }}</option>
    </select> -->
  </div>
  <!-- <transition name="fade" appear> -->
  <transition name="fade" appear>
    <div v-show="dropdown" class="item-container">
      <div
        v-for="(p, i) in filteredPokemon"
        :key="i"
        class="item"
        @click="selectPokemon(p)"
      >
      {{ p.name.toUpperCase() }}
      </div>
    </div>
  </transition>
  <!-- </transition> -->
  <!-- </div> -->
</template>
<script>
export default {
  name: "SelectComponent",
  data() {
    return {
      filteredPokemon: [],
      dropdown: false,
    };
  },
  props: [
    'pokemon',
    'modelValue'
  ],
  computed: {},
  mounted() {
    this.filteredPokemon = Array.from(this.pokemon);
  },
  watch: {
    pokemon(newVal) {
      if (newVal) {
        this.filteredPokemon = Array.from(newVal);
      }
    },
    modelValue(newVal) {
      if (newVal) {
        this.filterPokemon();
      }
    },
  },
  emits: ["change", "update:modelValue"],
  methods: {
    updateModelValue(value) {
      this.$emit("update:modelValue", { name:value, url:""});
      this.$emit("change");
    },
    filterPokemon() {
      this.filteredPokemon = this.pokemon.filter((p) =>
        p.name.toLowerCase().includes(this.modelValue.name.toLowerCase())
      );
    },
    selectPokemon(p) {
      this.$emit("update:modelValue", p);
      this.$emit("change");
      this.dropdown = false;
    },
  },
};
</script>
<style scoped>
.item-container {
  position: absolute;
  top: calc(100%+18px);
  transform: translateX(-50%) !important;
  left: 50%;
  z-index: 1000;
  background-color: white;
  border: solid 1px;
  max-height: 300px;
  overflow-y: scroll;
  min-width: 300px;
}
.item {
  margin: 0px 0px 0px 0px;
}
.item:hover {
    cursor: pointer;
  background-color: grey;
}
input {
  border: none;
  border-radius: 15px;
}
input:focus {
  border: none !important;
  border-radius: 15px;
  outline: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>