import React from 'react';
import { Link } from 'react-router-dom';

const DetailedIntro = () =>{
    return(
    <div className="col-sm-12">
        <div className="backimg" style={{backgroundImage: `url(${require('../../Assets/rica9.jpg')})`}}>
            <div className="container" style={{padding: '5%'}}>
                <div className='row'>
                <div className="col-sm-6">
                    <div style={{width: '100%', height: 350, position: 'relative'}}>
                    <img src={require("../../Assets/rica7.jpg")} style={{width: '100%', height: '100%' }}/>
                    <div className='darkCover'></div>
                       </div>
                </div>
                <div className="col-sm-6">
                    <h3>About Rica Group Logistics</h3>
                    <hr />
                    <p>Rica Group Logistics is a leading transportation company throughout North America. 
                        We continually deliver to our clients the best services by providing utmost safety standards, 
                        reliability, dedication and best communication through latest technology.</p>
                   <ul className="list-group ulist">
                     <li className="list-group-item"><Link to="/Aboutus">We offer solutions tailored to your unique and diverse needs.</Link></li>
                     <li className="list-group-item"><Link to="/Aboutus">Get safe and prompt services at the most competitive prices.</Link></li>
                 </ul>
                    <p>
                        Our wide industry experience and market exposure have led us to be the first choice for businesses. We simply go beyond the customer’s expectation level to deliver the best, always.
                    </p>
                    <Link to="/Aboutus" className="btn btn-info" style={{borderRadius: 20}}>About Us</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default DetailedIntro