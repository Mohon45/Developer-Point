import React from 'react';
import './Developer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Developer = (props) => {
    // console.log(props);
    const{name, img, age, country, salary, job} = props.developer;
    const shopingCart = <FontAwesomeIcon icon={faShoppingCart} className="icon-color"/>

    return (
        <div className="col-4">
            <div className="card h-100 card-design">
                <img className="img-design mx-auto mt-3" src={img} alt="" />
                <div className="card-body ps-5">
                    <h5>Name: {name}</h5>
                    <h6>Job: {job}</h6>
                    <h6>Age: {age}</h6>
                    <h6>Country: {country}</h6>
                    <h5>Salary: ৳{salary}</h5>
                    <button type="button" className="btn btn-design px-5 my-3">{shopingCart} add to Cart</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Developer;