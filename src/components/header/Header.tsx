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
          <li><a className="active" href="#" onClick={handleClick}>Home</a></li>
          <li><a href="#" onClick={handleClick}>About</a></li>
          <li><a href="#" onClick={handleClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;