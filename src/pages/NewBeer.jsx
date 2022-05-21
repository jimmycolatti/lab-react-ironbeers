import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

const NewBeer = () => {
  const defaultFormData = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  }

  const [formData, setFormData] = useState(defaultFormData)
  const navigateTo = useNavigate()

  const addNewBeer = async () => {
    const { data } = await axios.post(
      `https://ih-beers-api2.herokuapp.com/beers/new`,
      formData
    )
    navigateTo("/beers")
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      addNewBeer()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Header />
      <h1>Add a new beer</h1>

      <form onSubmit={submitHandler}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.title}
          onChange={changeHandler}
        />
        <br />
        <label>Tagline: </label>
        <input
          type="text"
          name="tagline"
          value={formData.tagline}
          onChange={changeHandler}
        />
        <br />
        <label>Description: </label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={changeHandler}
        />
        <br />
        <label>First Brewed: </label>
        <input
          type="text"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={changeHandler}
        />
        <br />
        <label>Attenuation Level: </label>
        <input
          type="number"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={changeHandler}
        />
        <br />
        <label>Contributed by: </label>
        <input
          type="text"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={changeHandler}
        />
        <br />
        <button type="submit">Brew!</button>
      </form>
    </div>
  )
}

export default NewBeer
