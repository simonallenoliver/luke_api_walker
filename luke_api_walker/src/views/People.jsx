import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const People = () => {

    const { id } = useParams();

    const [personName, setPersonName] = useState("")
    const [height, setHeight] = useState("")
    const [mass, setMass] = useState("")
    const [eyes, setEyes] = useState("")

    // useEffect takes a function and a second array of variable we can watch for changes- 
    // when id changes useEffect will see that and run the function again
    useEffect(() => {
        // here we grab the data from the api using string interpolation and the variable from the url we used useParams to grab
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(({data}) => {
          const { name, height, mass, eye_color } = data;
          setPersonName(name)
          setHeight(height)
          setMass(mass)
          setEyes(eye_color)
            console.log(data)
        })
        .catch((error) => {
            console.log("WARNING ERROR", error);
        })
    }, [id])

  return (
    <div>Hello my name is {personName}! I am {height} centimeters tall and have a mass of {mass}. I have pretty {eyes} eyes.</div>
  )
}

export default People