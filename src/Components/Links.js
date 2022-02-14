import React from "react";
import { Link } from 'react-router-dom';
const Links = () =>{
    return(
       <>
           <Link to="/">Home</Link>
           <Link to="/Contact"> Contact</Link>
           <Link to="/Services"> Services</Link>
           <Link to="/Careers"> Careers</Link>
           <Link to="/Aboutus"> About Us </Link>
       </>
    )
}

export default Links;