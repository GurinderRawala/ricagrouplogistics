import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
    
        <div className="container-fluid" style={{marginTop: -25}}>
            <div className="row">
                <div className="col-sm-12" style={{padding: 0}}>
                    <div className="footer" style={{backgroundColor: '#333', color: '#fff'}}>
                      <div className="container">
                          <div className="row">
                          <div className="col-sm-4">
                              <h4>Call Us</h4>
                              <p>+1 (587) 574-4890</p>
                              <br />
                              <h4>Email Us</h4>
                              <p>dispatch@ricagrouplogistics.com</p>
                              <br />
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
                          <br />
                          </div>
                          <div className="col-sm-4">
                              <h4>Visit Us</h4>
                    
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
                    
                          <br />
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