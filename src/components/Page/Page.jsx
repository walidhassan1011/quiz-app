import React from 'react'
import { Useforecast } from '../../context/ForecastProvider'

function Page() {
    const {name}=Useforecast()
  return (
    <div><h1>{name}</h1></div>
  )
}

export default Page