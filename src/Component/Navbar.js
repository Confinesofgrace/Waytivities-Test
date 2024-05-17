import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function Navbar() {

    const podcastUrl = 'https://drive.google.com/drive/folders/19LT_bnMPxLTZTEfIfzmH8etBzG3lGD82?usp=drive_link';
    return (
      <nav id="navbar">

            <NavLink to= '/'>
            
                <div id="logo">
                    <img id="logo-img" src={"https://waytivities.com/wp-content/uploads/2024/02/cropped-logo23.png"} alt="waytivities" />        
                    <p>WAYTIVITIES</p>
                </div>
            </NavLink>

            <div id= "nav-center">
                <ul>
                    <li> <NavLink to= '/'><p>Home</p></NavLink> </li>
                    <li> <NavLink to= '/books'><p>Books</p></NavLink></li>    
                    <li><p>Magazines</p></li>    
                    <li><a href= {podcastUrl}><p>Podcast</p></a> </li>    
                    <li><p>About Us</p></li>    
                </ul>

            </div>

            <div id="nav-right">
                <NavLink to= 'login'>
                    <button>Log In</button>
                </NavLink>

                <NavLink to= '/SignUp' >
                    <button>Sign Up</button>
                </NavLink>

                <div id="Shopping-cart">
                    <div id="price">
                        <p>Shopping Cart:</p>
                        <p>N20,000</p>
                    </div>

                    <div id="cart-icon">
                        <Cart/>
                        <div id="cart-items">4</div>
                    </div>
                    
                </div>
                
            </div>
      </nav>
    );
}
  
export default Navbar;