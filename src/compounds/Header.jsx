import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className=" col-md-12 bg-dark py-2">
            <nav className="navbar bg-dark navbar-dark ">
                <Link to="/" className="navbar-brand ml-5"> <h1 className='text-white bg-dark px-5'> Redux React - CRUD</h1> </Link>
            </nav>
        </div>
    )
}

export default Header