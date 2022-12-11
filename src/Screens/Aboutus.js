import React from "react";
import SubHeader from "../Components/SubHeader";


const Aboutus = () =>{
    return(
        <div className="Body" style={{overflow: 'hidden'}}>
            <SubHeader 
                title={"About Us"}
            />
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 paragraph">
                        <p>
						Rica Logistics is one of GTA’s top trucking and logistics company, a pioneer in innovation to upgrade gracefully chain effectiveness, and a pioneer in developing business sectors.
                        </p>
                        <p>
						Rica Logistics is one of the world’s top freight company that has rapidly gained the name throughout North America. We are an expert at offering sea, air, and street cargo, warehousing and circulation, and incorporated gracefully chain administrations at the most competitive prices in GTA. Rica Logistics additionally gives pro solutions for capital undertakings, oil and gas, 
                        synthetic compounds, and fairs and occasions coordination in the safest and prompt manner.
                        </p>
		 	</div>
                    <div className="col-sm-6 paragraph" data-aos="fade-down-left">
                        <div style={{width: '100%', height: '300', position: 'relative'}}>
                            <img alt='aboutus-img' src={ require('../Assets/rica9.jpg') } style={{width: '100%', height: '100%' }} />
                            <img alt='logo' src={ require('../Assets/RGL_LOGO.png') } style={{width: 90, height: 90, position: 'absolute', bottom: 0, left: 0}} />
                        </div>
                    </div>


                    <div className="col-sm-12 paragraph" data-aos="fade-right">
                        <h3>#1 Trucking Experts in GTA</h3>
                        <br />
                        <p>
						At Rica Group logistics, we’re serious about our obligation to act with 
                        respectability and offer in return. It’s the best activity, and it’s useful 
                        for our business. A culture of acting capably benefits the networks where we work, 
                        contributes toward a cleaner planet, adds to the feeling of pride and aggregate 
                        soul among our representatives, and fortifies our relationship with clients and investors.
                        </p>
                        <p>
						The qualities at the core of Rica Group logistics way of life are honesty, 
                        individual proprietorship, collaboration, and greatness. We look for, energize,
                         celebrate, and reward these qualities since they are fundamental to the guarantees
                          we’ve made to our clients, networks, speculators, providers, and workers. Major reasons 
                          why businesses count on Rica Group logistics include:
                        </p>
                    </div>


                </div>
            </div>
            <div className="backimg" style={{backgroundImage: `url('https://images.pexels.com/photos/4320464/pexels-photo-4320464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`, padding: '4%'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <ul className="list-group ulist">
                                <li className="list-group-item">#1 choice in the freight industry</li>
                                <li className="list-group-item">Over a decade of industry experience</li>
                                <li className="list-group-item">Market exposure</li>
                                <li className="list-group-item">Prompt services</li>
                                <li className="list-group-item">Enhanced security</li>


                            </ul>
                        </div>

                        <div className="col-sm-6 text-center">
                            <ul className="list-group ulist">
                                <li className="list-group-item">24/7 availability</li>
                                <li className="list-group-item">Right usage of advanced tools & equipment</li>
                                <li className="list-group-item">Safe and reliable services</li>
                                <li className="list-group-item">Competitive pricing</li>
                                <li className="list-group-item">On-time deliveries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus