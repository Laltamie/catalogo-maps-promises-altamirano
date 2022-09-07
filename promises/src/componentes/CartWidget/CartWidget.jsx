import React from "react";
import carritoImg from "../../assets/images/carrito.png"

const CartWidget = () => {
    return (
        <div>
            <img className="nav-carrito-logo" src={carritoImg} alt="logo carrito" />
        </div>
    );
};

export default CartWidget;