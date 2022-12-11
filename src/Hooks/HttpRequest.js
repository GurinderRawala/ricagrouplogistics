import { useState } from 'react';
import rica from '../api/rica';
//import RicaApi from '../api/RicaApi';

export default () =>{

    
    const [response , setResponse] = useState('');
    const [err, setErr ] = useState('');
    const [isLoading, setLoading] = useState(false);
    // console.log(response);
    const Post = async(Values, url) =>{
        const formData = new FormData();
        for(const x in Values){
            formData.append(x, Values[x]);
        }
        // console.log(formData);
        try {
            setLoading(true);
        
            const Response = await rica.post(url, formData);

            if(Response){
                //setResponse(Response.data);
               
                setResponse(Response.data);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            setErr(error)
        }
          
    };
     
    return{ response, err, Post, isLoading }
}