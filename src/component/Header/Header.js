import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="text-center pb-3 Heading">
                <h1>The Developers Point</h1>
                <h5>All the web developers here have a lot of experience.</h5>  
                <h5>Now a team of web developers will be created from here</h5>
                <h3>Total Budget: 02 Million</h3>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-create">
                    <div className="container-fluid">
                    <a className="text-dark navbar-brand" href="#e-commece">Developer Point</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="text-dark nav-link active" aria-current="page" href="#all shop">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link active" aria-current="page" href="#categories">Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark nav-link active" aria-current="page" href="#today's offer">Famous Library</a>
                        </li>
                        
                        
                        </ul>
                        <form className="d-flex flex-fill mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-secondary" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;