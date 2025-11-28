import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    angka: 0,
  }),

  getters: {
    totalAngka: (state) => state.angka,
  },

  actions: {
    tambah() {
      this.angka++
    },

    tambahPelan() {
      setTimeout(() => {
        this.angka++
      }, 500)
    }
  }
})
