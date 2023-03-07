import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const count = useLocalStorage('count', 0)
  const count2 = useLocalStorage('count2', 0)
  const count3 = useLocalStorage('count3', 0)
  const count4 = useLocalStorage('count4', 0)
  const count5 = useLocalStorage('count5', 0)
  const count6 = useLocalStorage('count6', 0)
  const count7 = useLocalStorage('count7', 0)
  const count8 = useLocalStorage('count8', 0)

  function increment() {
    count.value++
  }
  function reset() {
    count.value = 0
    count2.value = 0
    count3.value = 0
    count4.value = 0
    count5.value = 0
    count6.value = 0
    count7.value = 0
    count8.value = 0
  }
  function increment2() {
    count2.value++
  }
  function increment3() {
    count3.value++
  }
  function increment4() {
    count4.value++
  }
  function increment5() {
    count5.value++
  }
  function increment6() {
    count6.value++
  }
  function increment7() {
    count7.value++
  }
  function increment8() {
    count8.value++
  }

  return {
    count, count2, count3, count4, count5, count6, count7, count8,
    increment, increment2, increment3, increment4, increment5, increment6, increment7, increment8,
    reset
  }
})
