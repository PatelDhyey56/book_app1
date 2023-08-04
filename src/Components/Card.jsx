import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetchdata();
    // }, [])

    // const fetchdata = async () => {
    //     const api = await fetch("https://book-e-sell-node-api.vercel.app/")
    //         .then((res) => res.json())
    //         .then((d) => setData(d))
    //     console.log(data)
    // }

    return (
        <div>
            <div className="m-5">
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://www.vedantu.com/seo/content-images/c03fc31a-b1fc-4c5f-af6b-40cb5e2c94aa.jpg" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/bookdetail" className="btn btn-dark">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
