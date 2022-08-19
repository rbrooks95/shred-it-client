import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        {" "}
        SHRED IT {""}
        <img
          style={{
            height: 32,
            width: 32,
          }}
          src="https://d.newsweek.com/en/full/918081/tony-hawk-new.jpg?w=1600&h=1600&q=88&f=27123b16d91025235f9f92c603fe818e"
        />
      </Link>
      <ul>
        <li>
          <Link to="/reviewfeed">FEED</Link>
        </li>
        <li>
          <Link to="/reviewform">Write A Review</Link>
        </li>
        <li>
          <Link to="/tracks">Map</Link>
        </li>
      </ul>
    </nav>
  );
}
