import { NavLink } from "react-router-dom";

function Hero() {
    return (
      <div id="hero">
        <p id="header">His Footprints <br/>Are Clearly Seen!</p>
        <p id="hero-p">His Footprints Are Clearly Seen</p>

        <NavLink to= '/signup'>
          <button id="hero-butn">Get Started</button>
        </NavLink>
        
        
      </div>
    );
  }
  
  export default Hero;