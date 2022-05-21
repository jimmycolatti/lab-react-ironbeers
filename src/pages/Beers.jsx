import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const Beers = () => {
  const [beersList, setBeersList] = useState([])

  const getBeers = async () => {
    const { data } = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers`
    )
    setBeersList(() => data)
  }

  useEffect(() => {
    try {
      getBeers()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <Header />

      <div>
        {beersList.map((beer) => {
          return (
            <div key={beer._id}>
              <img
                src={beer.image_url}
                style={{ width: "50px" }}
                alt={beer.name}
              />
              <Link
                to={`/beers/${beer._id}`}
                style={{ textDecoration: "none" }}
              >
                <h2>{beer.name}</h2>
              </Link>
              <br />
              <h4>{beer.tagline}</h4>
              <p>
                <b>Created by: </b> {beer.contributed_by}{" "}
              </p>

              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Beers
