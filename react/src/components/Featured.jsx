import React from "react";
import Promo from "./Promo";


const Featured = (props) =>{
    return(
        <>
            Both socks and space rockets 🚀 will take you to new heights, but only one will get cold feet!
            <h5>Featured</h5>
            
            <div className="card-container d-flex flex-row justify-content-start" style={{ gap: "20px", padding: "20px" }}>
            
            {
                props.data.map((promo) => (
                <Promo key={promo.id} data={promo} />
                ))
            }
            </div>
        </>
    );
};
export default Featured;