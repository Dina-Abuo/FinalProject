import React from 'react'
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
export default function Nav() {
    return (
        <>
            <div className='div-nav'>
                <nav className="navbar navbar-expand-lg ">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/"> Posts </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink NavLink className="nav-link" to="/about"> About </NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/friends" > Friends </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/photos" > photos </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/vidoes" > Videos </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/check" > Ckeck-ins </NavLink>
                        </li>
                        <li>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>

                </nav>
            </div>




        </>
    )
}


/* 
            <div className='div-nav '>
                <ul>
                    <NavLink to="/ "> Posts </NavLink>
                    <NavLink to="/about "> About </NavLink >
                    <NavLink to="/friends " > Friends </NavLink>
                    <NavLink to="/photos " > photos </NavLink>
                    <NavLink to="/videos " > Videos </NavLink>
                    <NavLink to="/ckeck " > Ckeck-ins </NavLink>
                    <a className="nav-link dropdown-toggle" href=" # " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href=" # ">Sports</a></li>
                        <li><a className="dropdown-item" href=" # ">Music</a></li>
                        <li><a className="dropdown-item" href=" # ">Movies</a></li>
                    </ul>
                </ul>
            </div> */








