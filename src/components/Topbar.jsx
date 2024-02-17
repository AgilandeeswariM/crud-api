import React from 'react'
import { Link } from 'react-router-dom'
import 'react-bootstrap-icons'
const Topbar = () => {
    return (
        <nav className="navbar navbar-expand  bg-white topbar mb-4 shadow sticky-top">
            <div className="container">
            <i className="fa-solid fa-globe fa-2xl me-2 text-black"></i>
                <span className="h2 text-black" href="...">CRUD</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item text-dark">
                            <Link className="nav-link" to={'/'}>
                                <i className="fa-solid fa-users mx-1"></i>
                                <span> User</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/createuser'}>
                                <i className="fas fa-fw fa-table" />
                                <span>Create User</span></Link>
                        </li>
                       
                        
                        
                    </ul>
                </div>
            </div>

    
        </nav>
    )
}

export default Topbar