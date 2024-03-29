import React from "react";
import ContactForm from "../Components/ContactForm";
import SubHeader from "../Components/SubHeader";


const Contact = () =>{
    return(
        <div className="Body">
            <SubHeader 
                title={"Contact Us"}
            />
            <div className="container" style={{overflow: 'hidden', paddingBottom: 12}}>
                <div className="row">
                    <div data-aos="fade-right" className="col-md-6" style={{padding: 25}}>
                        <ContactForm />
                    </div>
         
                    <div data-aos="fade-up-left" className="col-md-6">
                        <div className="paragraph">
                            <p>
            Rica Group Logistics<br />
              29 Hillsbury Dr Brampton ON L6X 4Z5<br />
              Phone: +1 (587) 574-4890<br />
              Email: dispatch@ricagrouplogistics.com
                            </p>
              
                            <p>We have repersentatives avaliable 24/7 to assist you. You can call Jay at any time or email us. Rica Group Logistics is always avaliable for their customers.</p>
                        </div>
                        <div style={{position: 'relative'}}>
                            <img alt="contact-img" src="https://images.pexels.com/photos/8866776/pexels-photo-8866776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{maxWidth: '100%', height: 250}} />
                            <div className="effect_it"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Contact