import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Beers from "./pages/Beers"
import RandomBeer from "./pages/RandomBeers"
import NewBeer from "./pages/NewBeer"
import BeerDetails from "./pages/BeerDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:beerId" element={<BeerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
