import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import { FaSpinner } from 'react-icons/fa';
import CountryCode from '../Hooks/CountryCode';
import HttpRequest from '../Hooks/HttpRequest';

const CareerForm = () =>{
    const [inputs, setInputs] = useState({});
    const { response, err, Post, isLoading } =  HttpRequest()
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value || event.target.files;
      setInputs(values => ({...values, [name]: value}))
    }

    const Submit = (e) =>{
        e.preventDefault();
        const Load = {
            firstname: inputs.firstname,
            lastname: inputs.lastname,
            email: inputs.email_,
            phone: `${inputs.country_codes} ${inputs.phone}`,
            address: `${inputs.street}, ${inputs.city} ${inputs.state} ${inputs.postal}`,
            position: inputs.position,
            equipment: inputs.equipment,
            message: inputs.Request,
            emailAttachments: inputs.file
            
        }
        Post(inputs, "/check.php");
       //console.log(inputs)
    }

    useEffect(() =>{
        CountryCode()
    }, [])

    return(
<div className="col-sm-12 text-center paragraph">
        <h4>Application Form</h4>
<form onSubmit={Submit}  method="POST" encType="multipart/form-data">
        <input type="text" name="firstname" placeholder="First Name *" value={inputs.firstname || ''}
         required onChange={handleChange}/><br/><br/>
        <input type="text" name="lastname" placeholder="Last Name *" value={inputs.lastname || ''}
        required onChange={handleChange}/><br/><br/>
        <input type="text" name="email_" placeholder="Email *" value={inputs.email_ || ''}
         required onChange={handleChange}/><br/><br/>
        <select className="country_codes" name="country_codes" value ={inputs.country_codes || setInputs({...inputs, country_codes: '+1'})}
         onChange={handleChange}></select><br/><br/>
        <input type="text" name="phone" placeholder="Phone *" value ={ inputs.phone || ''}
         required onChange={handleChange}/><br/><br/>
        <input type="text" name="street" placeholder="Address *" value={inputs.street || ''}
        onChange={handleChange}/><br/><br/>
        <input type="text" name="city" placeholder="City *" value={inputs.city || ''}
         onChange={handleChange}/><br/><br/>
        <input type="text" name="state" placeholder="State/Province *" value={inputs.state || ''}
        onChange={handleChange}/><br/><br/>
        <input type="text" name="postal" placeholder="Postal Code" value={inputs.postal || ''}
         onChange={handleChange}/><br/><br/>
<Row>
<div className="col-sm-6" style={{ marginBottom: 5 }}>
        <label htmlFor="position">Position Applying For *</label><br/>
        <select name="position" required value={inputs.position || ''}
        onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="Owner Operator">Owner Operator</option>
            <option value="Company Driver">Company Driver</option>
            <option value="Lease Purchase Program">Lease Purchase Program</option>
            <option value="Dispatcher">Dispatcher</option>
            <option value="Accountant">Accountant</option>
            <option value="Other">Other</option>
        </select>
</div>
<div className="col-sm-6" style={{marginBottom: 5}}>
   <label htmlFor="equipment">Equipment You Drive</label><br/>
   <select name="equipment" value={inputs.equipment}
   onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="Reefer">Reefer</option>
            <option value="Dry Van">Dry Van</option>
           <option value="Dry Van/Reefer">Dry Van/Reefer</option>
        </select>
</div>
</Row>
        <label htmlFor="files">Upload Resume</label><br/>
        <center><input type="file" name="files" className="custom-file-input" files={inputs.files || ""}
         onChange={handleChange}/></center><br/><br/>
        <textarea name="Request" placeholder="Write your Message"
        onChange={handleChange} value={inputs.Request || ''}
        ></textarea><br/><br/>

        <button className="btn btn-danger" style={{borderRadius: 20}}>Submit</button>
</form>
    <div className="respond" style={{padding: 10}}>
  
    { !isLoading && response !== ''? response: isLoading? <FaSpinner />: null }
    </div> 
</div>
    )
}

export default CareerForm