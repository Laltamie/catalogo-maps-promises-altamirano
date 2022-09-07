import React, { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const productos = [
    {id: 1, name: "Conjunto", precio: "30000",img: ""},
    {id: 2, name: "Conjunto Primavera",precio: "35000",img: ""},
    {id: 3,name: "Vestido",precio: "25000", img: ""},
    {id: 4,name: "Sweater", precio: "18000",img: ""},
    {id: 5,name: "Top",precio: "9000",img: ""},
    {id: 6,name: "Vestido Verano",precio: "50000",img: ""},
    {id: 7,name: "Catsuit Verano",precio: "36000",img: ""},
    {id: 8,name: "Camisa",precio: "13000",img: ""},
    {id: 9,name: "Campera",precio: "11000",img: ""}
  ]

const ItemListContainer = ({greeting}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res));

    }, [])

    return(
        <>
        <div className="greeting py-10">
            <h2>{greeting}</h2>
            <ItemList data = {data}/>
            <ItemCount stock={5} inicial={1} agregar={0}/>
        </div>
        </>
    );
};

export default ItemListContainer;