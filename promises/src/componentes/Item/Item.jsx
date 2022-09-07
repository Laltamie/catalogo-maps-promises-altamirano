import React from "react";

const Item = (info) => {
    return (
        <>
        <div className="card">
            <img src={info.img} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <p className="card-text">{info.precio}</p>
                <a href="" className="btn btn-primary"></a>
            </div>
        </div>
        </>
    )
        
};

export default Item;