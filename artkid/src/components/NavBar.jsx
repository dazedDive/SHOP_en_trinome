import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="d-flex justify-content-center">
            <Link to="/collections"  className="item mx-3">Collections</Link>
            <Link to="/artists" className="item mx-3">Artists</Link>
            <Link to="/top" className="item mx-3">Tops moumoutte</Link>
            <Link to="/account" className="item mx-3">Mon compte</Link>
            <Link to="/mycart" className="item mx-3">Mon Panier</Link>
        </div>
    );
};

export default NavBar;