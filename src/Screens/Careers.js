import React from "react";
import CareerForm from "../Components/CareerForm";
import SubHeader from "../Components/SubHeader";


const Careers = () =>{
    return(
        <div className="Body">
            <SubHeader 
                title={"Careers"}
            />
            <div className="container">
                <div className="row">
                    <CareerForm />
                </div>
            </div>
        </div>
    )
}

export default Careers;