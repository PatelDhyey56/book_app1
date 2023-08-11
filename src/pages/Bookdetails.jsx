import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import bookService from "../service/book.service"

export default function Bookdetails() {
  const { id } = useParams();

  const [bookdetail, setBookdetail] = useState([]);

  const findBook = async (e) => {
    bookService.getById(Number(id)).then((res) => {
      setBookdetail(res);
      console.log(bookdetail)
    });
  }
  useEffect(() => {
    findBook();
  }, [setBookdetail])

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-title mb-2">{bookdetail.name}</h3>
            <h6 className="card-subtitle mb-2">Type - {bookdetail.category} </h6>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6 ">
                <div className="white-box text-center">
                  <img
                    src={bookdetail.base64image}
                    className="card-img-top rounded" alt="img"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6 px-4">
                <h4 className="box-title mt-5">Product description</h4>
                <p>
                  {bookdetail.description}
                </p>
                <h2 className="mt-5">
                  ${bookdetail.price}<small className="text-success">(36%off)</small>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
