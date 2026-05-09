export interface FuelEntry {
  id: number
  carId: number
  liters: number
  price: number
  mileage: number
  date: string
}
export interface NewFuelEntry {
  liters: number
  price: number
  mileage: number
}

export interface DBFuelEntry {
  liters: number
  price: number
  mileage: number
  id: number
  car_id: number
  created_at: string
}