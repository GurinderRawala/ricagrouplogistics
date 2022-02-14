import React from 'react';

const SubHeader = ({ title }) =>{
    return(
        <div className="col-sm-12 backimg" style={{backgroundImage: `url(${require('../Assets/rica1.jpg')})`, padding: '5%'}}>
        <h3 className="text-center">{title}</h3>
        </div>
    )
}

export default SubHeader