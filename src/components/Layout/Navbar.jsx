import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { Route, Link, Routes } from 'react-router-dom';

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            <div className="container">
                <Link to="/" className={`${pathname !== '/favorites' && 'active'}`}>
                    <div className="logo">Rick y Morty</div>
                </Link>
                <ul>
                    <li>
                        <Link to="/" className={`${pathname !== '/favorites' && 'active'}`}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites" className={`${pathname === '/favorites' && 'active'}`}>
                            Favoritos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
