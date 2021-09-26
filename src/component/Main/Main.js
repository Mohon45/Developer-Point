import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

const Main = () => {
    const [Developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data));
    },[]);

    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row my-5">
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
                <div className="col-md-9">
                    <div className="row g-4 developer-design">
                        {
                            Developers.map(developer => <Developer 
                                key={developer.key} 
                                developer={developer}
                                handleAddToCart={handleAddToCart}
                                />)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Main;