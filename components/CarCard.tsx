"use client"
import Image from "next/image"
import React, { useState } from "react"
import { CarProps } from "@types"
import CustomButton from "./CustomButton"

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car
    return <div>CarCard</div>
}

export default CarCard
