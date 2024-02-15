
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const Planet = () => {
  const { id } = useParams();

  const [planetName, setPlanetName] = useState("")
  const [climate, setClimate] = useState("")
  const [terrain, setTerrain] = useState("")
  const [water, setWater] = useState("")
  const [population, setPopulation] = useState("")


  // useEffect takes a function and a second array of variable we can watch for changes- 
  // when id changes useEffect will see that and run the function again
  useEffect(() => {
      // here we grab the data from the api using string interpolation and the variable from the url we used useParams to grab
      axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(({data}) => {
        const { name, climate, terrain, surface_water, population } = data;
        setPlanetName(name)
        setClimate(climate)
        setTerrain(terrain)
        setWater(surface_water)
        setPopulation(population)
          console.log(data)
      })
      .catch((error) => {
          console.log("WARNING ERROR", error);
      })
  }, [id])

return (
  <div>
  <h1>Hello! You've reached {planetName}.</h1>
  <p>Climate: {climate}</p>
  <p>Terrain: {terrain}</p>
  {/* ternary statement to display true or false intstead of the default numerical value for surface water */}
  <p>Surface Water: {water>0? "true": "false"} </p>
  <p>Population: {population}</p>
  </div>
)
}

export default Planet