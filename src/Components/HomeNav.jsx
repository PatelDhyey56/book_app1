import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomeNav() {
    const initialBookName = {
        bookname: ""
    }

    const [searchbook, setSearchbook] = useState(initialBookName);

    const changeSearch = (e) => {
        setSearchbook({
            ...searchbook, [e.target.name]: e.target.value
        })
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="nav-item">
                    Books :
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search Book"
                            aria-label="Search"
                            name="bookname"
                            value={setSearchbook.bookname}
                            onChange={changeSearch}
                        />
                        <Link to={`/searchbook/${searchbook.bookname}`} className="btn btn-dark" onClick={()=>{return setSearchbook(initialBookName)}}>search</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}
