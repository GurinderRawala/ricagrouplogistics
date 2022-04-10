import React from 'react';
import { Link } from 'react-router-dom';
const HomePageIntro = () =>{
    return(
        <div className="col-sm-12">
        <div style={{backgroundColor: '#000000', color: '#fff'}}>
            <br /><br />
            <div className="text-center" style={{fontSize: 18}}>
                <i>BEST SERVICES</i>
                <h3>Best Fit for your Loads</h3>
                <p style={{color: '#ffffff'}}>
                    Serving the North American market with the finest  experience  in trucking industry, 
                    we offer you year round transportation services to Canada, USA and Mexico.
                </p>

            </div>
         <div data-aos="fade-right" className="container">
         <div className='row'>
             <div  className="col-sm-4" style={{marginBottom: 10 }}>
                 <img alt='some-img' src="https://media.istockphoto.com/photos/blue-bonnet-big-rig-semi-truck-with-black-grille-transporting-cargo-picture-id1320745755?b=1&k=20&m=1320745755&s=170667a&w=0&h=iCUX581EcfkWHw4pO1OgsHOL9IaU5fCARowhBloG_Qo=" style={{width: '100%', height: 250}} />
                 <h3 className="text-center">Temperature Controlled</h3>
                 <p className="text-center" style={{color: '#ffffff', padding: 15}}>
                     Experts at Rica Group Logistics ensure trustworthy and proficient delivery of 
                     Temperature-Sensitive products throughout North America and safely store the 
                     commodities like frozen and protect-from-freeze.
                 </p>
                 <div className="text-center"><Link to="/Services" className="btn btn-danger" style={{borderRadius: 20}}>Explore More</Link></div>
             </div>


                <div className="col-sm-4" style={{marginBottom: 10}}>
                    <img src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width: '100%', height: 250}} />
                 <h3 className="text-center">Dry Van</h3>
                 <p className="text-center" style={{color: '#ffffff', padding: 15}} >
                     Whenever your shipment like paper products, small machinery parts, or other delicate 
                     things demands better safety and protection, Rica Group Logistics has got your back in that case and keeps your covered.
                 </p>
                 <div className="text-center"><Link to="/Services" className="btn btn-danger" style={{ borderRadius: 20 }}>Explore More</Link></div>
                </div>

                <div className="col-sm-4" style={{marginBottom: 10}}>

                    <img src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: '100%', height: 250 }} />
                 <h3 className="text-center">Truckload</h3>
                 <p className="text-center" style={{color: '#ffffff', padding: 15}}>
                  Rica Group Logistics has a dexterous team of experts who ensure highly reliable,
                      prompt, and catering to your diverse truckload at the most budget-friendly prices.
                 </p>
                 <div className="text-center"><Link to="/Services" className="btn btn-danger" style={{borderRadius: 20}}>Explore More</Link></div>
                </div>


         </div>
         </div>
        </div>
    </div>
    )
}

export default HomePageIntro