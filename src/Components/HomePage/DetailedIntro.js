import React from 'react';
import { Link } from 'react-router-dom';
const photo = 'https://th.bing.com/th/id/OIP.Hf5S6DHsNhZYFofv4wBYswHaE8?pid=ImgDet&rs=1'
const backgroundImg = 'https://s1.cdn.autoevolution.com/images/news/gallery/freightliner-inspiration-truck-can-now-self-drive-itself-legally-in-the-us-video-photo-gallery_1.jpg'
//require("../../Assets/rica7.jpg")
const DetailedIntro = () =>{
    return(
    <div className="col-sm-12">
        <div className="backimg" style={{backgroundImage: `url(${backgroundImg})`}}>
            <div className="container" style={{padding: '5%'}}>
                <div className='row'>
                <div className="col-sm-6">
                    <div data-aos="fade-up-right" style={{width: '100%', height: 350, position: 'relative'}}>
                    <img src={photo} style={{width: '100%', height: '100%' }} alt='img-some'/>
                    <div className='darkCover'></div>
                       </div>
                </div>
                <div data-aos="fade-up" className="col-sm-6">
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