import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          BOOK APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">HOME</Link>
            </li>
          </ul>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <div className='m-2'>
              <Link to="/cart" className="nav-link active">
                <ShoppingCartTwoToneIcon fontSize='large' />
              </Link>
            </div>
            <button type="button" className="btn btn-dark me-md-2">
              <Link to="/signin" className="nav-link active">SIGN IN</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}
