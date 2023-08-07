import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

export default function Bookdetails() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-title mb-2">Rich Dad Poor Dad</h3>
            <h6 className="card-subtitle mb-2">Type - </h6>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6 ">
                <div className="white-box text-center">
                  <img
                    src="https://beta.whatsinyourstory.com/wp-content/uploads/2023/06/rich-dad-poor-dad-24-2.jpg"
                    className="card-img-top rounded" alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6 px-4">
                <h4 className="box-title mt-5">Product description</h4>
                <p>
                bout Robert Kiyosaki and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing.
                </p>
                <h2 className="mt-5">
                  $500<small className="text-success">(36%off)</small>
                </h2>
                <button className="btn btn-dark btn-rounded m-2">
                  <Link rel="stylesheet" to="/buy" className="nav-link active">
                    Buy Now
                  </Link>
                </button>
                <button className="btn btn-dark btn-rounded m-2">
                  <Link rel="stylesheet" to="/cart" className="nav-link active">
                  Add to cart
                  </Link>
                  </button>
                <h3 className="box-title mt-5">Key Highlights</h3>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check text-success" />
                    Sturdy structure
                  </li>
                  <li>
                    <i className="fa fa-check text-success" />
                    Designed to foster easy portability
                  </li>
                  <li>
                    <i className="fa fa-check text-success" />
                    Perfect furniture to flaunt your wonderful collectibles
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h3 className="box-title mt-5">General Info</h3>
                <div className="table-responsive">
                  <table className="table table-striped table-product">
                    <tbody>
                      <tr>
                        <td width={390}>Brand</td>
                        <td>Stellar</td>
                      </tr>
                      <tr>
                        <td>Delivery Condition</td>
                        <td>Knock Down</td>
                      </tr>
                      <tr>
                        <td>Seat Lock Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Office Chair</td>
                      </tr>
                      <tr>
                        <td>Style</td>
                        <td>Contemporary&amp;Modern</td>
                      </tr>
                      <tr>
                        <td>Wheels Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Upholstery Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Upholstery Type</td>
                        <td>Cushion</td>
                      </tr>
                      <tr>
                        <td>Head Support</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td>Suitable For</td>
                        <td>Study&amp;Home Office</td>
                      </tr>
                      <tr>
                        <td>Adjustable Height</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Model Number</td>
                        <td>F01020701-00HT744A06</td>
                      </tr>
                      <tr>
                        <td>Armrest Included</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Care Instructions</td>
                        <td>
                          Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical
                          For Cleaning.
                        </td>
                      </tr>
                      <tr>
                        <td>Finish Type</td>
                        <td>Matte</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
