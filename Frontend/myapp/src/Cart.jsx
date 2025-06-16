import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = () => {
    fetch('http://localhost:5000/api/cart/cartinfo')
      .then(res => res.json())
      .then(data => setCartItems(data));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = (id) => {
    fetch(`http://localhost:5000/api/cart/cartdelete/${id}`, {
      method: 'DELETE',
    })
      .then(() => fetchCart())
      .catch((err) => console.error(err));
  };
  


  const clearCart = () => {
    fetch(`http://localhost:5000/api/cart/cartdeleteall`, {
      method: 'DELETE',
    })
      .then(() => fetchCart())
      .catch((err) => console.error(err));
  };

const totalPrice = cartItems.reduce((total, item) => {
  const priceNum = typeof item.iprice === 'string'
    ? parseInt(item.iprice.replace(/[₹,]/g, ''))
    : item.iprice;
  return total + priceNum;
}, 0);


  return (
    <div className="cart-container" style={{ padding: '30px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items" style={{ display: 'grid', gap: '20px' }}>
            {cartItems.map((item) => (
              <div
                key={item._id}
                style={{
                  border: '1px solid #ccc',
                  padding: '15px',
                  borderRadius: '10px',
                }}
              >
                <h4>{item.iname}</h4>
                <p>Price: {item.iprice}</p>
                <button
                  onClick={() => removeItem(item._id)}
                  style={{
                    backgroundColor: 'crimson',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '5px',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3>Total: ₹{totalPrice}</h3>
          <button
            onClick={clearCart}
            style={{
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '5px',
              marginTop: '20px',
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
