import React, { useState } from 'react';
import rica from '../api/rica';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

    
    const [response , setResponse] = useState('');
   
    const [isLoading, setLoading] = useState(false);
  // console.log(response);
    const SendInput = async(Values, url) =>{
        const formData = new FormData();
        for(const x in Values){
            formData.append(x, Values[x]);
        }
       // console.log(formData);
        try {
            setLoading(true);
            const Response = await rica.post(url,formData,
            {
                headers:{
                    "Content-Type": "multipart/form-data" 
                }
            });

            if(Response){
                //setResponse(Response.data);
               
                setResponse(Response.data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error.message);
        }
          
        };
     
   return[response, SendInput, isLoading];
}