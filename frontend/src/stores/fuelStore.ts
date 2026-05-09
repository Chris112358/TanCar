import { defineStore } from 'pinia'
import type { NewFuelEntry, FuelEntry, DBFuelEntry } from '../types/fuel'



export const useFuelStore = defineStore('fuel', {

  state: () => ({
    fuelEntries: [] as FuelEntry[]
  }),

  actions: {

    addFuel(carId: number, entry: NewFuelEntry){

      const newEntry: FuelEntry = {
      id: Date.now(),
      carId,
      date: new Date().toISOString(),
      ...entry
      }

      this.fuelEntries.push(newEntry)

    },

    async fetchFuel(carId: number) {
      try {
        console.log("Fetching Fuel")
        const res = await fetch(`/api/fuel/${carId}`)        //fetch(`http://localhost:3000/fuel/${carId}`)
        const data = await res.json()
        console.log(data)
        const mapped = data.map((row: DBFuelEntry) => ({
          id: row.id,
          carId: row.car_id,
          date: row.created_at,
          liters: row.liters,
          price: row.price,
          mileage: row.mileage
        }))
        this.fuelEntries = mapped

      } catch (err) {
        console.error('Failed to fetch cars:', err)
      }
    },

    async addFuel2(carId: number, entry: NewFuelEntry) {
      try {
        const res = await fetch(`/api/fuel/${carId}`, {      //fetch(`http://localhost:3000/fuel/${carId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(entry)
        })

        const newFuel = await res.json()

        const mapped = {
          id: newFuel.id,
          carId: newFuel.car_id,
          date: newFuel.created_at,
          liters: newFuel.liters,
          price: newFuel.price,
          mileage: newFuel.mileage
        }
        
        this.fuelEntries.unshift(mapped)

      } catch (err) {
        console.error('Failed to add fuel:', err)
      }
    },

    getFuelForCar(carId:number){
      return this.fuelEntries.filter(e => e.carId === carId)
    }

  }

})