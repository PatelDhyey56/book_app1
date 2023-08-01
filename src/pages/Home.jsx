import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="m-5">
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://www.vedantu.com/seo/content-images/c03fc31a-b1fc-4c5f-af6b-40cb5e2c94aa.jpg" className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
