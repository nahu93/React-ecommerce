import react from 'react'
import {Link,NavLink} from 'react-router-dom'
import Cartwidget from './CartWidget'
import { NavDropdown } from "react-bootstrap"

const NavBar = () => {
    return (  

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
  <a class="navbar-brand" href="#">
    <img src='/multimedia/LOGO.png' alt="" width="90" height="60" />
    </a>
   
    <ul class="nav justify-content-end">
  <li class="navbar-nav" >
    <NavLink className="navbar-brand" to='/catalogo'>Catalogo</NavLink>
  </li>
  </ul>
  <NavDropdown title="Categorias" id="basic-nav-dropdown">
  <NavLink  to='/categoria/nike'>Nike</NavLink>
  <hr />
  <NavLink  to='/categoria/adidas'>Adidas</NavLink>
  <hr />
  <NavLink  to='/categoria/puma'>Puma</NavLink>
  <hr />
 <NavLink  to='/categoria/jordan'>Jordan</NavLink>
        </NavDropdown>
  <li class="navbar-nav" >
    <Link to='/cart'><Cartwidget/></Link>
    
  </li>

 
  </div>
</nav>
 


 


        )
    
    
      
    
}

export default NavBar

/*<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    */