import React from 'react'
import { Link } from 'react-router-dom'

export default function Headertop() {
  return (
    <div>
         <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+91 9876543210</p>
              <p>details@ShopForHome.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-end">
              <Link to="">
                <i className="fab fa-facebok-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
