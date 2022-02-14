import React from 'react';

const AboutRicaHomePage = () =>{
    return(
        <div className="col-sm-12">
       
        <div className="backimg" style={{backgroundImage: `url("https://images.pexels.com/photos/8909442/pexels-photo-8909442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")` }}>
          <br /><br />
          <div className="container">
              <div className="text-center">
                  <h3>Reasons to choose us Rica Group Logistics is one stop shop for all your company needs</h3>
                  <p style={{fontSize: 16}}>Rica Group Logistics has been a renowned name in GTA and we offer countless reasons for our customers why they must invest in our trucking services.</p>
              </div>
            {/*Add row class */}
        <div className='row'>
              <div className="col-sm-4 social" style={{padding: '3%'}}>
              
                  <div className="grid-container">
                      <div>
                          <i className="fa fa-building"></i>
                      </div>
                              <div>
                              <h4>Industry Experience</h4>
                              <p>We hold over a decade of experience in the trucking industry.</p>
                              </div>
                    </div>

                    <div className="grid-container">
                      <div>
                          <i className="fa fa-bar-chart"></i>
                      </div>
                              <div>
                              <h4>Expedite Solutions</h4>
                              <p>We provide same day services and cover your last minute loads so that your target is met.</p>
                              </div>
                    </div>


                    <div className="grid-container">
                      <div>
                          <i className="fa fa-phone"></i>
                      </div>
                              <div>
                              <h4>24/7 Availability</h4>
                              <p>To keep you out of the hassle, our services are made available round the clock.</p>
                              </div>
                    </div>


         
              </div>

               



               <div className="col-sm-4 social" style={{padding: '3%'}}>

                     <div className="grid-container">
                      <div>
                          <i className="fa fa-tasks"></i>
                      </div>
                              <div>
                              <h4>Swift Services</h4>
                          <p>Our experienced company makes sure that all your loads are at the right place, at the right time, for the best price. </p>
                              </div>
                    </div>
              
                  <div className="grid-container">
                      <div>
                          <i className="fa fa-lock"></i>
                      </div>
                              <div>
                              <h4>Enhanced Security</h4>
                              <p>With team of our best drivers all your loads are covered in the safest possible manner.</p>
                              </div>
                    </div>

                    

                    <div className="grid-container">
                      <div>
                          <i className="fa fa-money"></i>
                      </div>
                              <div>
                              <h4>Competitive quotes</h4>
                          <p>All our pricing is based on affordable basis for the companies.</p>
                              </div>
                    </div>

         
              </div>
        <div className="col-sm-4" style={{padding: '3%'}}>
            <div>
          <img src="https://images.pexels.com/photos/8909442/pexels-photo-8909442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{maxWidth: '100%', height: 'auto'}} />
         </div>
        </div>

          </div>

          </div>
        </div>
    </div>
    )
}

export default AboutRicaHomePage