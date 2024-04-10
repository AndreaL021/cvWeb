import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
export const beatStore = defineStore('beat', () => {
  const beat_scale = ref(1.5);
  const beat_duration = ref(2);

  return { beat_scale, beat_duration }
})
