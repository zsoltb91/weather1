import "./Header.css";
import ReactLogo from "../../assets/react.svg";

function Header() {
  return (
    <div className="navbar">
      <ul>
        <li className="title">
          <a href="../../public/index.html">
            <img className="reactlogo" alt="" src={ReactLogo}></img>React Apps
          </a>
        </li>
        <li className="nav nav1">
          <a href="#weather-anchor">Weather info</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
