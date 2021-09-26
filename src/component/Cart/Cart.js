import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0)
    
    return (
        <div>
            <div className="ms-3 cart-design">
                <h3>Developer Added: {cart.length}</h3>
                <h4>Total Cost: {total}</h4>
                <ul>
                    {
                        cart.map(developer => <li key={developer.key}>
                            {developer.name}
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;