import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav';
import HomeNav from '../Components/HomeNav';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';

export default function Searchbook() {
    const { name }  = useParams();
    // console.log(name)
    const API = "http://localhost:5000/api/book"

    const [slbook, setSlbook] = useState([]);

    const findBook = async () => {
        try {
            const res = await fetch(`${API}/search?keyword=${name}`)
            const data = await res.json();
            // console.log(data.result);
            setSlbook(data.result);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        findBook();
    }, [slbook])

    return (
        <div>
            <Nav />
            <HomeNav />
            <div className='row'>
                {slbook.map((e) => {
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
