import { NavLink } from "react-router-dom";

function Navbar() {

    const podcastUrl = 'https://drive.google.com/drive/folders/19LT_bnMPxLTZTEfIfzmH8etBzG3lGD82?usp=drive_link';
    return (
      <nav id="navbar">

            <NavLink to= '/'>
                <div id="logo">Waytivities</div>
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
            </div>
      </nav>
    );
}
  
export default Navbar;