import { Link } from "react-router-dom"
import headerPic from "../assets/header.png"

const Header = () => {
  return (
    <div>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <img src={headerPic} alt="header" />
      </Link>
    </div>
  )
}

export default Header
