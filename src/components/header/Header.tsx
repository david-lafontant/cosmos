import { Link } from "react-router-dom";
import { LuMenuSquare } from "react-icons/lu";

const Header = () => {
  function handleClick() {
    const menuToggle = document.getElementById("check") as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }

  return (
    <header id="header">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <LuMenuSquare className="menu" />
        </label>
        <label className="logo">COSMOS</label>
        <ul id="navlist">
          <li><Link to="/" className="active" onClick={handleClick}>Home</Link></li>
          <li><Link to="/gallery" onClick={handleClick}>Gallery</Link></li>
          <li><Link to="/about" onClick={handleClick}>About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;