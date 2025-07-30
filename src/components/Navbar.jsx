import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-fixed Head'>
            <nav className='fw-bold shadow bg-primary' >
                <div className='p-4 fs-1 d-flex justify-content-between align-items-center '>
                    <div className='d-flex align-items-center'>
                        {/* <i className="fa-sharp fa-solid fa-strikethrough my-2" style={{ color: "#ffffff" }}></i> */}
                        {/* <i className="fa-solid fa-kip-sign my-2" style={{ color: "#ffffff" }}></i>  */}
                       &nbsp;&nbsp;
                        <span className='brand-name titleName'>
                        <Link to="/" className='list-group-item  my-2 '>
                    <span className=''><i className="fa-solid fa-"></i>&nbsp;Library Management</span>
                </Link>
                            
                            </span>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar