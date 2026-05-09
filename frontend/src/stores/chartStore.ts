import { defineStore } from "pinia";

export const usePriceChartStore = defineStore('priceChart', {   

    state: () => ({
        
        chart: {
            labels: ['Jan','Feb','Mar','Apr'],
            datasets:[
                {
                label:'Fuel price',
                data:[7.1,6.9,7.3,7.0]
                }
            ]
        }
        
    }),

    actions: {

        async fetchChart(carId: number) {
            try {
                const res = await fetch(`/api/charts/price/${carId}`)     //fetch('http://localhost:3000/cars')
                const data = await res.json()
                this.chart = data
            } catch (err) {
                console.error('Failed to fetch priceChart:', err)
            }
        },

    }

})


export const useLiterChartStore = defineStore('literChart', {   //liters per mileage

    state: () => ({
        
        chart: {
            labels: ['Jan','Feb','Mar','Apr'],
            datasets:[
                {
                label:'Fuel consumption per km',
                data:[7.1,6.9,7.3,7.0]
                }
            ]
        }
        
    }),

    actions: {

        async fetchChart(carId: number) {
            try {
                const res = await fetch(`/api/charts/liters/${carId}`)    //fetch('http://localhost:3000/cars')
                const data = await res.json()
                this.chart = data
            } catch (err) {
                console.error('Failed to fetch litersChart:', err)
            }
        },

    }

})