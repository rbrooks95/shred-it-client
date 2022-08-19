import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        {" "}
        SHRED IT
      </Link>
      <ul>
        <li>
          <Link to="/signUp">FEED</Link>
        </li>
        <li>
          <Link to="/raceList">Write A Review</Link>
        </li>
        <li>
          <Link to="/tracks">Map</Link>
        </li>
      </ul>
    </nav>
  );
}
