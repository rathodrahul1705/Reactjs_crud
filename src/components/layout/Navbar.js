import React from "react";
import {Link, NavLink} from "react-router-dom"


const Navbar = () => {

	return (

	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	 			
	 			<div className = "container">

	 			 <Link class="navbar-brand" to="/">React User</Link>
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>

					  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul class="navbar-nav mr-auto">
					      <li class="nav-item ">
					        <Link class="nav-link" exact to="/">Home 
					        <span class="sr-only"></span>
					        </Link>
					      </li>
					       <li class="nav-item ">
					        <Link class="nav-link" exact to="/about">About 
					        <span class="sr-only"></span>
					        </Link>
					      </li>
					       <li class="nav-item ">
					        <Link class="nav-link" exact to="/contact">Contct 
					        <span class="sr-only"></span>
					        </Link>
					      </li>
					    </ul>

					  </div>
					  <Link  to = "/users/add" className ="btn btn-outline-light">Add User
					  </Link>
				</div>


	</nav>

	)

}

export default Navbar;