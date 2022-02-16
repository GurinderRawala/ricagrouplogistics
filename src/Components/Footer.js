import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
    
        <div className="container-fluid" style={{marginTop: -25}}>
            <div className="row">
                <div className="col-sm-12" style={{padding: 0}}>
                    <div className="backimg footer" style={{backgroundImage: `url("https://i.pinimg.com/originals/79/67/e0/7967e04de5a8294fa7bc859b4bfdb3f0.jpg")`}}>
                      <div className="container">
                          <div className="row">
                          <div className="col-sm-4">
                              <h4>Call Us</h4>
                              <p>+1 (587) 574-4890</p>
                              <hr />
                              <h4>Email Us</h4>
                              <p>dispatch@ricagrouplogistics.com</p>
                              <hr />
                          </div>
                          <div className="col-sm-4">
                            <h4>Our Services</h4>
                            <ul className="list-group ulist">

                            <li className="list-group-item">
                            <Link to="/Services" state={{heading : "Temperature-controlled and Dry Van Services In North America."}}>
                                Temperature-controlled & Dry Van Services In North America.
                            </Link>
                            </li>

                            <li className="list-group-item">
                                <Link to="/Services" state={{ heading: "Logistics, Truckload, Short and Long Haul Fleet Services In North America." }}>
                                    Logistics, Truckload, Short & Long Haul Fleet Services In North America.
                                </Link>
                            </li>
                          </ul>
                          </div>
                          <div className="col-sm-4">
                              <h4>Visit Us</h4>
                              <hr />
                              <p>29 Hillsbury Dr Brampton ON L6X 4Z5</p>
                              <div className="ulist">
                               <Link to={"#"} style={{fontSize: 28, margin: 8}}>
                               <FaFacebook/>
                               </Link>  
                               <Link to="#" style={{fontSize: 28, margin: 8}}>
                                 <FaInstagram />
                                </Link>
                    
                              </div>
                          </div>
                          </div>
                      </div>
                    <div className="container-fluid">
                     <div className="row">
                    
                          <hr />
                <div className="col-sm-6 text-left" style={{padding: 5}}>Copyright &copy; { new Date().getFullYear().toString() } Rica Group Logistics. All rights Reserved</div>
                <div className="col-sm-6" style={{padding: 5, textAlign: 'right'}}>Website design by gurinder_rawala <FaInstagram /></div>
                    
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer