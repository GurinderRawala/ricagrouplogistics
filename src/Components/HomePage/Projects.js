import React from 'react';
const backImg = 'https://th.bing.com/th/id/R.9cb5494cafe2fc0eea213588155b694a?rik=uRIM72JfpJgwYQ&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f627%2f293%2f307%2fnature-forest-road-mountain-mist-autumn-photo-download-1080P-wallpaper.jpg&ehk=NpSgxUPETIycAYLp9wZuNjjFiqZqUP7%2bhJXDay3ssjU%3d&risl=&pid=ImgRaw&r=0'
const Projects = () =>{
    return(
        <div className="col-sm-12">
            <div className="backimg" style={{backgroundImage: `url("${backImg}")`, padding: '10%'}}>
                <div data-aos="fade-left" className="container">
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