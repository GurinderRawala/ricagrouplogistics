import React from "react";
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
const HomePagePart1 = () =>{
    return(
        <div className="container-fluid" style={{backgroundColor: "black"}}>
        <div className="row">
            <div data-aos="fade-right" className="col-md-6" style={{padding: 0}}>
                <div className="backimg" style={{backgroundImage:`url(${'https://npr.brightspotcdn.com/dims4/default/49e9758/2147483647/strip/true/crop/1000x525+0+33/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F1b%2Feb%2F16775ff5423db3e9540fd401fc9c%2Fautonomous-truck.jpg'})`, height: 480}}>
                 <div className="App-header" style={{height: 480}}>
                    <h4 style={{color: 'goldenrod'}}>Welcome to the Rica Group Logistics</h4>
                <div style={{paddingLeft : 25}}>
                        Rica Group Logistics is North America’s leading transportation company that holds over a decade of experience in the fleet & trucking industry.<br />
                        <div style={{marginTop: 8}}> To learn more about us:<br />
                                       <b style={{color: 'goldenrod'}}>Phone <FaPhoneAlt size={14} /></b> +1 (587) 574-4890<br />
                                       <b style={{color: 'goldenrod'}}>Email <HiOutlineMail /> </b> dispatch@ricagrouplogistics.com 
                        </div>
                 </div>
                </div>
                </div>
            </div>
    
            <div data-aos="flip-left" className="col-md-6 card" style={{backgroundColor: 'black', padding: 0}}>
                <div className="card__content">
                    <div className="card__front">
                        <h5 className="card__title">Rica Logistics</h5>
                        <p className="card__subtitle" style={{fontSize: 18 }} >Contact Today</p>
                    </div>
                    <div className="card__back">
                    <div style={{ borderWidth: 3, borderColor: '#fff'}}>
                          <p className="card__body">
                Rica Group Logistics<br />
              29 Hillsbury Dr Brampton ON L6X 4Z5<br />
              Phone: +1 (587) 574-4890<br />
              Email: dispatch@ricagrouplogistics.com</p>
                    </div>
                </div>
            </div>
    
            </div>
    
           </div>
           </div>
    )
}

export default HomePagePart1