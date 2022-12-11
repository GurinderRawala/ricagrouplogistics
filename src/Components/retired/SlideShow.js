import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import  rica4  from '../Assets/rica4.jpg';
//import  rica3  from '../Assets/rica3.jpg';
//import rica3 from 'https://media.istockphoto.com/photos/long-haul-semi-truck-on-a-rural-western-usa-interstate-highway-picture-id1156528620?k=20&m=1156528620&s=612x612&w=0&h=0omNL3F_GRFqR62yxLDrfpBq7tuNPUhNw6YFbLuxuoQ=';

//import  rica2  from '../Assets/rica2.jpg';
//import  rica6  from '../Assets/rica6.jpg';

const Slideshow = () =>{
    const slideImages = [
        rica4, 
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/empty-paved-road-at-sunset-in-the-chilean-patagonia-royalty-free-image-1591901619.jpg', 
        'https://www.dktruck.com/imp.oem/Cascadia-1.jpg', 
        'https://media.istockphoto.com/photos/white-semitrailer-truck-heading-down-a-fourlane-highway-at-dusk-picture-id1289928297?b=1&k=20&m=1289928297&s=170667a&w=0&h=J873qv9Zwpb8qkXlkgjjxljAdFEafPveNs-nbL3ZiXw='
    ];

   

    return(
        <div>
            <Slide easing="ease">
                <div className="each-slide" style={{position: 'relative'}}>
                    <img src={slideImages[0]} className="slideimg" alt='some-slide' />
                    <div className='darkCover'></div>

                    <div className='effect'>
                        <h5>We're here to help</h5>
                        <h4>Call Us: <br></br>
           +1 (587) 574-4890</h4>
                        <Link className='btn btn-info' to={"/Contact"}>Contact</Link>
                    </div>
    
                </div>
                <div className="each-slide" style={{position: 'relative'}}>
                    <img src={slideImages[1]} className="slideimg" alt='some-slide'  />
                    <div className='darkCover'></div>
            
                    <div className='effect'>
                        <h5>Excellence</h5>
                        <h4>Safest Fleet Service<br></br> in Brampton</h4>
                        <Link className='btn btn-info' to="/Services">Service</Link>
                    </div>

                </div>
                <div className="each-slide" style={{position: 'relative'}}>
                    <img src={slideImages[2]} className="slideimg" alt='some-slide' />
                    <div className='darkCover'></div>
            
                    <div className='effect'>
                        <h5>Delivering Success</h5>
                        <h4>Top class service delivered<br></br> over years</h4>
                        <Link className='btn btn-info' to="/Aboutus">About Us</Link>
                    </div>

                </div>
                <div className="each-slide" style={{position: 'relative'}}>
                    <img src={slideImages[3]} className="slideimg" alt='some-slide' />
                    <div className='darkCover'></div>

                    <div className='effect'>
                        <h5>We're hiring</h5>
                        <h4>Apply today and get what<br></br> you deserve</h4>
                        <Link className='btn btn-info' to="/Careers">Careers</Link>
                    </div>

                </div>
            </Slide>
        </div>
    )
}

export default Slideshow