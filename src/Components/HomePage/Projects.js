import React from 'react';

const Projects = () =>{
    return(
    <div className="col-sm-12">
        <div className="backimg" style={{backgroundImage: `url("https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`, padding: '10%'}}>
        <div className="container">
        <div className='row'>
            <div className="col-sm-4 social text-center">
                <i className="fa fa-user"></i>
                <h1>10K&#43;</h1>
                <p style={{color: "#fff", fontSize: 18}}>Happy Customers</p>
            </div>
        
          
            <div className="col-sm-4 social text-center">
                <i className="fa fa-truck"></i>
                <h1>5K&#43;</h1>
                <p style={{color: "#fff", fontSize: 18}}>On-time deliveries</p>
            </div>
            <div className="col-sm-4 social text-center">
                <i className="fa fa-clock"></i>
                <h1>5Years&#43;</h1>
                <p style={{color: "#fff", fontSize: 18}}>Experience</p>
            </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default Projects