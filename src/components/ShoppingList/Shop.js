import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { updateShopping, deleteShopping } from "../../utils/crud";
import { collection, onSnapshot } from "firebase/firestore";

//crud for the shopping

function Shop() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState({
    id: "",
    name: "",
    price: "",
    url: "",
    cart: false,
    quantity: "",
  });

  // to get all the data from firestore
  const shoppingCollectionRef = collection(db, "shoppingCart");
  console.log(shoppingCollectionRef);

  useEffect(() => {
    onSnapshot(shoppingCollectionRef, (snapshot) => {
      setCart(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

 function addtocart(item) {
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true;
      }
    });
    db.collection("shoppingCart").doc(`${item.id}`).set(item, { merge: true });
  }

  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }

  return (
    <div className="shoppingList">
        <h2>Your ShoppingList 🛒</h2>
      <table className="shoppingList-container">
        <thead className="shoppingList-header">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>         
          </tr>
        </thead>
        <tbody>
          {cart.map((i, index) => (
            <tr key={i.id}>
              <th>{index + 1}</th>
              <th>
                <img src={i.url} style={{ width: "4rem" }} />
              </th>
              <td>{i.name}</td>
              <td>{i.price} €</td>
              <td>
                <button
                  // onClick={() => decrease(i)}
                  className="btn__sm"
                >
                  -
                </button>
                {i.quantity}
                <button
                  // onClick={() => increase(i)}
                  className="btn__sm"
                  size="sm"
                >
                  +
                </button>
                <button className="btn__sm"> 🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total">
        <div className="total__item">
          <h4>TOTAL: {total()} €</h4>
        </div>
        <span>Printlist<button className="printer"> 🖨️ </button></span>
      </div>
    </div>
  );
}

export default Shop;
