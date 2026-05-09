import { defineStore } from 'pinia'

export const useCarStore = defineStore('cars', {

  state: () => ({
    cars: [
      { id: 1, name: "Audi A4" },
      { id: 2, name: "VW Golf" }
    ],
    selectedCarId: null as number | null
  }),

  actions: {

    async fetchCars() {
      try {
        const res = await fetch("/api/cars")    //fetch('http://localhost:3000/cars')
        const data = await res.json()
        this.cars = data
      } catch (err) {
        console.error('Failed to fetch cars:', err)
      }
    },

    addCar(name: string) {
      const id = Date.now()
      this.cars.push({ id, name })
    },

    async addCar2(name: string) {
      try {
        const res = await fetch("/api/cars", {         //fetch('http://localhost:3000/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name })
        })

        const newCar = await res.json()
        this.cars.push(newCar)
      } catch (err) {
        console.error('Failed to add car:', err)
      }
    },
    
    selectCar(id: number) {
      this.selectedCarId = id
    }

  }

})


