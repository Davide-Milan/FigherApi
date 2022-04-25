import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="nav">
            <ul className='nav-list'>
                <li className='nav-link'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/arnie">Arnie</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar