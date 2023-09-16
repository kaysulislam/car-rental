require("dotenv").config()

const cars = [
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 24,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 26,
        make: "toyota",
        model: "corolla",
        transmission: "a",
        year: 1993,
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.6,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 31,
        make: "toyota",
        model: "corolla",
        transmission: "m",
        year: 1993,
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 25,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        make: "toyota",
        model: "corolla",
        transmission: "a",
        year: 1993,
    },
    {
        city_mpg: 23,
        class: "compact car",
        combination_mpg: 26,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        make: "toyota",
        model: "corolla",
        transmission: "m",
        year: 1993,
    },
    {
        city_mpg: 23,
        class: "small station wagon",
        combination_mpg: 25,
        cylinders: 4,
        displacement: 1.8,
        drive: "fwd",
        fuel_type: "gas",
        highway_mpg: 30,
        make: "toyota",
        model: "corolla wagon",
        transmission: "a",
        year: 1993,
    },
]

export async function fetchCars() {
    // const headers = {
    //     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    //     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    // }
    // const response = await fetch(
    //     "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    //     {
    //         headers: headers,
    //     }
    // )

    // const result = await response.json()

    return cars
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50 // Base rental price per day in dollars
    const mileageFactor = 0.1 // Additional rate per mile driven
    const ageFactor = 0.05 // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0)
}
