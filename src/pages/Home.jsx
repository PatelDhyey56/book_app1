import React from 'react'
import { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Card from '../Components/Card'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/book/all")
      const data = await res.json();
      // console.log(data.result);
      setData(data.result);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Nav />
        <div className='row'>
          {data.map((e) => {
            return (
              <div className='col-md-3 m-3' key={e._id}>
                <Card title={e.name.slice(0, 30)} discription={e.description.slice(0, 100)} img={e.base64image} web={e.url} />
              </div>
            )
          })}
        </div>
      <Footer />
    </div>
  )
}
