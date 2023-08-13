import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

export default function Account() {
  const [useraccount, setUseraccount] = useState([]);

  return (
    <div style={{ backgroundColor: "#eeee" }}>
      <Nav />
      <div className="m-5">
        <div className="container d-flex justify-content-center bg-body-tertiary" >
          <div className="row" style={{ backgroundColor: "#eeee" }}>
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div className="card card-style1 border-0">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div >
                        <h3 className="h2 mb-0 ">John mark</h3>
                      </div>
                      <ul className="list-unstyled mb-1-9">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Email :
                          </span>{" "}
                          edith@mail.com
                        </li>
                        <li className="display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Phone :
                          </span>{" "}
                          507 - 541 - 4567
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-4 mb-sm-5">
              <div>
                <span className="section-title text-primary mb-3 mb-sm-4">
                  About You :
                </span>
                <p>
                  Edith is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="mb-0">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The point
                  of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
