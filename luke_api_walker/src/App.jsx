import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Routes, Route, useNavigate } from "react-router-dom"
import People from './views/People'
import Planet from './views/Planet'



function App() {

  const [category, setCategory] = useState("planet")
  const [id, setId] = useState(0)

  const navigate = useNavigate();


  // search function takes category and id from usestate to naviagate to the correct
const search = (e) => {

  e.preventDefault()

  const cat = category;
  const dataID = id;
  navigate(`/${cat}/${dataID}`)
}

  return (
    <>
      <h1>Starwars Search</h1>
      <div> <h2>
        <label>Search: </label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="planet">planet</option>
          <option value="people">people</option>
        </select>
      </h2></div>
      <div>
        <h2><label>ID: </label>
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </h2>
      </div>
      <button onClick={search}>search</button>


    <Routes>


    <Route path={"people/:id"} element = {<People/>}/>
    <Route path={"planet/:id"} element = {<Planet/>}/>
    {/* catch all path for incorrect routes */}
    <Route path='*' element={<h2>These are not the droids you are looking for...</h2>} />

    </Routes>




    </>
  )
}

export default App
