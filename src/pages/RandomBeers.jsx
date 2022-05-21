import axios from "axios"
import { useState, useEffect } from "react"
import Header from "../components/Header"

const RandomBeers = () => {
  const [beer, setBeer] = useState(null)

  const getRandomBeer = async () => {
    const { data } = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    )

    setBeer(() => data)
  }

  useEffect(() => {
    try {
      getRandomBeer()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <Header />
      {beer && (
        <div key={beer._id}>
          <img
            src={beer.image_url}
            style={{ width: "100px" }}
            alt={beer.name}
          />

          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <h4>{beer.attenuation_level}</h4>
          <p>
            <b>{beer.first_brewed}</b>
          </p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      )}
    </div>
  )
}

export default RandomBeers
