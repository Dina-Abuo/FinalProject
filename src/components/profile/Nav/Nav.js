import React from 'react'
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
export default function Nav() {

    // const changeColor = () => {
    //     document.getElementsByClassName("nav-link").style.color = "#1876f2;";
    // }

    return (
        <><div className='content'>
            <div className='container'>
                <div className='row'>
                    <div className='div-nav col-lg-9 col-12 '>
                        <nav className="navbar navbar-expand-lg ">
                            <ul className="navbar-nav">
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="navLink" aria-current="page" to="/"> Posts </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="navLink" to="/about"> About </Link >
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="navLink " to="/friends" > Friends </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="navLink  hidden-xs" to="/photos" > photos </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="navLink  hidden-xs" to="/vidoes" > Videos </Link>
                                </li>
                                <li>
                                    <NavDropdown title="More" id="basic-nav-dropdown" className='mt-1'>
                                        <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
                                        <NavDropdown.Item href="/music">Music</NavDropdown.Item>
                                        <NavDropdown.Item href="/movies">Movies</NavDropdown.Item>
                                        <NavDropdown.Item href="/shows">TV shows</NavDropdown.Item>
                                        <NavDropdown.Item href="/books">Books</NavDropdown.Item>
                                        <NavDropdown.Item href="/links">Links</NavDropdown.Item>
                                        <NavDropdown.Item href="/evante">Evante</NavDropdown.Item>
                                        <NavDropdown.Item href="/question">Question</NavDropdown.Item>
                                        <NavDropdown.Item href="/reviews">Reviews given</NavDropdown.Item>
                                        <NavDropdown.Item href="/gourps">Gourps</NavDropdown.Item>
                                        <NavDropdown.Item href="/mange">Mange sections</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
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








