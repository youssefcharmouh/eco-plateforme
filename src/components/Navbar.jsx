import React from 'react'
import { Navbar ,NavDropdown,Container,Nav} from 'react-bootstrap'
import Logo from '../media/logo.png'
import Intellcap from '../media/intellcap.png'
import maFlag from '../media/ma_flag.png'
import frFlag from '../media/fr_flag.png'
import { Link } from 'react-router-dom'

function RespNav() {


  return (
    
    <>
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container-fluid">
          <Link to="/" className="navbar-brand img-fluid">
            <img src={Intellcap} alt="Logo" width="35" class="d-inline-block p-0" />
          </Link>
          <button class="btn btn-light me-auto fs-6" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars"></i> </button>
          <a className="navbar-brand img-fluid p-0 d-lg-none" href="#">
            <img src={Logo} alt="" width="150" class="d-inline-block p-0" />
          </a>
          <div class="dropdown dropdown-menu-end d-flex mx-2 ms-auto">
            <button class="btn btn-transparent btn-sm dropdown-toggle ms-auto" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <i className='fa-solid fa-language'></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item text-center" type="button"><img width={'20px'} src={maFlag}/> AR</button></li>
              <li><button class="dropdown-item text-center" type="button"><img width={'20px'} src={frFlag}/> FR</button></li>
            </ul>
          </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className='ms-auto'>
          <a className="navbar-brand img-fluid p-0 d-none d-lg-block" href="#">
            <img src={Logo} alt="" width="200" class="p-0" />
          </a>
          </div>
        </div>
      </div>
  </nav>

    </>
  )
}

export default RespNav