import React from "react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
import "./Product.css";
export default function Product() {
  const { name, setName, user, setUser, cart, setCart, products, setProducts } =
    useContext(AppContext);
  const [qty, setQty] = useState();

  const handleQty = (e) => {
    setQty(e)
  };

  const addToCart = (id,qty) => {
    setCart({ ...cart, [id]: qty });
    console.log(cart);
  };
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Product 1",
        desc: "This is description",
        price: 23,
        url: "https://picsum.photos/id/1/300/300",
      },
      {
        id: 2,
        name: "Product 2",
        desc: "This is description",
        price: 67,
        url: "https://picsum.photos/id/2/300/300",
      },
      {
        id: 3,
        name: "Product 3",
        desc: "This is description",
        price: 78,
        url: "https://picsum.photos/id/3/300/300",
      },
    ]);
  }, []);

  return (
    <div className="App-Product-Container">
      {/* {name}<button onClick={()=>setName("Madhu")}>Submit</button> */}
      {products.map((value, index) => (
        <div className="App-Product-Box">
          <img src={value.url} />
          <h3>{value.name}</h3>
          <h4>{value.desc}</h4>
          <h3>{value.price}</h3>
          <select onChange={(e) => handleQty(Number(e.target.value))}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button onClick={() => addToCart(value.id,qty)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
