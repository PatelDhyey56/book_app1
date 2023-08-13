import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import bookService from "../service/book.service"
import { useGlobalContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

export default function Bookdetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = useGlobalContext();
  const [bookdetail, setBookdetail] = useState([]);

  const findBook = async (e) => {
    bookService.getById(Number(id)).then((res) => {
      setBookdetail(res);
    });
  }
  useEffect(() => {
    findBook();
  }, [setBookdetail])

  const addcartitem = () => {
    let bookinCart = false;
    let localBooks = localStorage.getItem('Book_cart');
    if (localBooks) {
      const localitem = JSON.parse(localStorage.getItem('Book_cart'));
      for (const e of localitem.book_list) {
        if (e.id === bookdetail.id) {
          bookinCart = true;
          break;  
        }
      }
      if (bookinCart === true) {
        window.alert("Already in Cart");
      } 
      else {
        localitem.price = 0;
        localitem.books = 0;
        localitem.book_list.push(bookdetail);
        for (const e of localitem.book_list) {
          localitem.price = localitem.price + e.price;
          localitem.books = localitem.books + 1;
        }
        localStorage.setItem('Book_cart', JSON.stringify(localitem));
        console.log(localitem);
      }
    }
    else {
      // const initial_item = useGlobalContext();
      item.cartitem.price = bookdetail.price;
      item.cartitem.books = 1;
      item.cartitem.book_list.push(bookdetail);
      localStorage.setItem('Book_cart', JSON.stringify(item.cartitem));
    }
    navigate('/cart')
    // console.log(item.cartitem);
  }

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
                <button className="btn btn-dark btn-rounded m-2" onClick={addcartitem}>
                  Add to cart
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
