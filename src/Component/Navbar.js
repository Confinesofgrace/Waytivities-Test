import { NavLink } from "react-router-dom";
import Search from "./Search";
//import Cart from "./Cart";

/*  <div id="Shopping-cart">
                    
<div id="cart-icon">
<Cart/>
<div id="cart-items">4</div>
</div>

<div id="price">
<p>N20,000</p>
</div> 

</div>*/


function Navbar() {

    return (
      <nav id="navbar">

            <div id= "nav-left">                
                <NavLink to= '/'>
                
                <div id="logo">
                    <img id="logo-img" src={"https://waytivities.com/wp-content/uploads/2024/02/cropped-logo23.png"} alt="waytivities" />        
                    <p>WAYTIVITIES</p>
                </div>
                </NavLink>    
            </div>

            <div id="nav-center">
                <ul>
                    <li> <NavLink to= '/'><p>Home</p></NavLink> </li>
                    <li> <NavLink to= '/books'><p>Resources</p></NavLink></li>    
                    <li><p>About Us</p></li>    
                </ul>

                <Search/>
            </div>
            
            <div id="nav-right">
                <NavLink to= 'login'>
                    <button>Log In</button>
                </NavLink>

                <NavLink to= '/SignUp' >
                    <button>Sign Up</button>
                </NavLink>
            </div>
      </nav>
    );
}
  
export default Navbar;