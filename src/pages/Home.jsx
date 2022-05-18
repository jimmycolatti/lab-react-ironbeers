import topPic from "../assets/beers.png"
import midPic from "../assets/random-beer.png"
import bottomPic from "../assets/new-beer.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="column">
      <div className="topRow">
        <img src={topPic} alt="all-beers" />
        <Link to={`/beers`} style={{ textDecoration: "none" }}>
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="midRow">
        <img src={midPic} alt="random-beer" />
        <Link to={`/random-beer`} style={{ textDecoration: "none" }}>
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="bottomRow">
        <img src={bottomPic} alt="new-beer" />
        <Link to={`/new-beer`} style={{ textDecoration: "none" }}>
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

export default Home
