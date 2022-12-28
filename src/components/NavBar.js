import logo from "../images/react-icon-small.png";
function NavBar() {
  return (
    <nav className="navStyle">
      <div>
        <img src={logo} className="imageStyle"></img>
        <h3 className="imageLabelStyle">ReactFacts</h3>
      </div>

      <h4 className="navTextStyle">React Course - Project 1</h4>
    </nav>
  );
}

export default NavBar;
