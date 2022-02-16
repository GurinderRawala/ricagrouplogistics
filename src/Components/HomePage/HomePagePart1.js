import React from "react";

const HomePagePart1 = () =>{
    return(
        <div className="container-fluid" style={{backgroundColor: "black"}}>
        <div className="row">
            <div className="col-md-6" style={{padding: 0}}>
                <div className="backimg" style={{backgroundImage:`url(${require('../../Assets/rica1.jpg')})`, height: 480}}>
                 <div style ={{width: '85%', margin: 'auto', padding: 25 }}>
                    <h4 className="text-left">Welcome to the Rica Group Logistics</h4>
                <p style={{margin: 0}}>
                        Rica Group Logistics is North America’s leading transportation company that holds over a decade of experience in the fleet & trucking industry.<br></br>
                                        To learn more about us:<br />
                                        Phone: +1 (587) 574-4890<br />
                                        Email: dispatch@ricagrouplogistics.com 
            
                 </p>
                </div>
                </div>
            </div>
    
            <div className="col-md-6 card" style={{backgroundColor: 'black', padding: 0}}>
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