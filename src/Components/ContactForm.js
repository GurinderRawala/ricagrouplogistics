import React, { useState} from 'react';
import { FaSpinner } from 'react-icons/fa';
import CountryCode from '../Hooks/CountryCode';
import HttpRequest from '../Hooks/HttpRequest';
//action="check.php"
const ContactForm = () =>{
    const [inputs, setInputs] = useState({});
    const { response, err, Post, isLoading } =  HttpRequest()
    CountryCode()
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const Submit = (e) =>{
        e.preventDefault();
        Post(inputs, "/check.php");
    }


    return(
        <div>
        <h4>Fill this form to Contact Us</h4>
        <form onSubmit={Submit} method="POST" encType="multipart/form-data">
            <input type="text" value={inputs.Name || ''} name="Name" placeholder="Name" onChange={handleChange} required /><br /><br/>
            <input type="text" value={inputs.email || ''} name="email" placeholder="Email" required onChange={handleChange}/><br /><br />
            <select className="country_codes" value={inputs.country_codes || ''} name="country_codes" onChange={handleChange}></select><br/><br/>
            <input type="number" name="phone" value={inputs.phone || ''} placeholder="Phone (optional)"  onChange={handleChange} /><br/><br/>
            What is best the way to contact you?<br/>
            <div className="col-sm-6 grid-container">
            Phone<input type="checkbox" value={inputs.phone_Yes || ''} name="phone_Yes" style={{width: 'auto'}}  onChange={handleChange}/>
           </div>
        <div className="col-sm-6 grid-container" style={{marginBottom: 10}}>
          Email<input type="checkbox" value={inputs.email_Yes || ''} name="email_Yes" style={{width: 'auto'}}  onChange={handleChange}/>
           </div>
           <textarea name="msg" value={inputs.msg || ''} placeholder="Write your message..."  onChange={handleChange}></textarea><br/><br/>
           <button className="btn btn-info" style={{borderRadius: 20 }}>Submit</button> 
        </form>
        <div className="respond" style={{ padding: 10 }}>{ !isLoading && response !== ''? response: isLoading? <FaSpinner />: null }</div>
      </div>
    )
}

export default ContactForm