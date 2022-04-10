import React from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../Components/SubHeader";


const Services = () =>{
    const location = useLocation()
    const { heading } = location.state? location.state: false
    console.log(heading)
    return(
        <div className="Body">
            <SubHeader 
            title={heading || 'Temperature-controlled and Dry Van service in North America'}
            />
            <div className="container">
            <div className="row">
           	<div className="col-sm-6 paragraph" data-aos="fade-up">
           		<h3>Temperature-Controlled</h3>
           		<p>
           			Rica Group Logistics tailors the entirety of our temperature-controlled shipping administrations to every customer’s particular necessities. We’re an agent profoundly experienced in orchestrating temperature-touchy, transitory, or solidified merchandise. With one call our group can assist you in finding the best transporter to address your issues. We work with just believed transporters utilizing the most recent, best in class refrigerated transportation hardware, which will guarantee that your temperature-touchy shipments are maneuvered carefully controlled shipping administrations gave to you. At Rica Logistics, temperature-controlled shipments that we handle include:
           		</p>
           	    <br />
           		<ul>
           			<li>Fresh foods such as dairy, meat, etc</li>
           			<li>Pharmaceuticals</li>
           			<li>Frozen foods</li>
           			<li>Paints and coatings</li>
           			<li>Products that need PFF (Protect From Freeze)</li>
           		</ul>

           	</div>
           	<div className="col-sm-6 paragraph" data-aos="fade-up-right">
           		<img alt="some-img" src={'https://s1.cdn.autoevolution.com/images/news/gallery/freightliner-inspiration-truck-can-now-self-drive-itself-legally-in-the-us-video-photo-gallery_1.jpg'} style={{width: '100%', height: 'auto'}} />
           	</div>

            <div className="col-sm-12 paragraph" data-aos="fade-left">
            	<h3>Dry Van</h3>
            	<p>
            		Delivery in dry van trailers is one of the most well-known methods for freight transportation used in North Amercia for independent ventures and other large businesses. For the most part, private ventures have more modest requests which are helpful for LTL transporting. What’s more, as freight is a huge segment of the cost of products sold, organizations are exceptionally cost delicate. This is the reason Rica Group Logistics has collaborated with probably the biggest purchaser of freight to more readily support our clients. Beginning to end you will have knowledge into your rates, the transporter you select, the assessed get and conveyance times, the travel status, and significantly more. Benefits of counting our dry van services:
            	</p>
            	<br />

            	<ul>
           			<li>Last Mile</li>
           			<li>Airport Delivery</li>
           			<li>Bonded</li>
           			<li>Insured services</li>
           			<li>Competitive prices</li>
           		</ul>
           	

           		<br />
           		<h3>Intermodal Services</h3>
           		<p>
           			Rica Logistics offers a wide range of intermodal services for all sorts of services throughout GTA. We join the best of the two modes – our trucking assets mixed with a single expedited segment on the rail – to offer separated support, diminish your carbon footprint and enhance your graceful chain while helping you meet your travel objectives. Through our mastery in overseeing holders as the leading intermodal equipment provider, we have a proven track record of excellence and innovation that permits our clients the opportunity to pick the best answer for their business.
           		</p>

           		<ul>
           			<li>Temperature controlled and dry shipments</li>
           			<li>Huge shipments</li>
           			<li>Long haul shipments, more than 700 miles</li>
           			<li>Shipments that are not time-sensitive</li>
           		</ul>
            </div>

           </div>
           </div>
        </div>
    )
}

export default Services