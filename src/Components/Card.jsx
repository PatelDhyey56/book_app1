import { Link } from "react-router-dom"

export default function Card({ title, discription, img, web }) {

    return (
        <div>
            <div className="m-2">
                <div className="card" style={{ width: "22rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        {img ? <img className="card-img-top" src={img} alt="no images"></img> : <img className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhIQEBAQDQ8PDQ4RDw8PDw8PEA4OFREWFhURFRMYHSghGB0mJxYVITEiJzUrMDAwFx8zRDMtNyktLisBCgoKDg0NFQ0PFysZFxkrKystLS0rKzc3KysrKysrKysrKysrKy03KysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMkA+wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCBAYDB//EADwQAAICAQEFBAYIBQQDAAAAAAABAgMEEQUSITFBUWFxgQYTIjJSsSMzQlORocHRFGLh8PFDgqLSJHKS/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAAAESEB/9oADAMBAAIRAxEAPwD62AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyjW3yTPaGI+rS8OIGuDasxOHs6t9j6mqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZRg3yR6xx+1/gB4Gcam+n48DajWlyRkB4Qxu1/ge0a0uS/UyRIEoyRijJASeGRj68Vz+Z7hAVTQN/Io3uK4S+ZoSWnB8GAAAAAAAAAAAAAAAAAAAAAAAeFl+7NKXuSSSfwy169zNkCY1nrGCMYHogMkSiESgMgABKJIRIEoyRijJASEAgJPK+hS7n0Z6gCqlFp6PgyCyupUl2PoyvnBp6MDEAAAAAAAAAAAAAAAA1M3NUFwW8/wR72SKfaD11A0sPbzsudN6jFTWlTSaWvwvXq+h0GFa/q5PWUV7L+KP7o+f7Wo6rg09U1wafamdH6P7U/iK9JPdyKdN7v7JrufXzA6yB6I1sS7fjrya4Sj2S7DZQGSJRCJQGQAAlEkIkCUZIxRkgJCAQEgAAYW1KS0fk+wzAFXZW4vR/5MSzsrUlo/wDBX21OL0fk+0DAAAAAAAAAAACGSQwPC5lZlotLUaGRADm8+vmUcb50Wxur96L4rpOL5xfj+x1GXUUOdjgdvs3PjOMcirjCa9uPXTqmviXEvYSTSaeqaTT7UfKvRzav8Nbuzf0FrW9ryrnyU/Do/wCh9Gwbt17r9yb9h/DJ/Z8H/fMCzRKIRKAyAAEokhEgSjJGKMkBIQCAkAAAAAMZwTWjMgBW3UuL7V0Z5lrKKa0fFFffQ4966P8ARgeQAAAAAAAAAA85o1boG60eNkQKbJqKfMoOkvrKzKpA5DOxuZf+h+195fwtr9qK+ik/tQX2fFfLwNbMoKLJrlCSnBuMoyUoyXNNcmB9gwr95bsvfj1+JdJG0jk/R3bCyK1NaRurelkeyX7P++R1NNqklJdea6p9UB6gACUSQiQJRkjFGSAkIBASAAAAAAAARJa8HxRIAr8ijd4rjH5HiWrRo5FGnFcvkB4AAAAAAAAGMkZEAa1sDQyKi1nE1bYAc/lUlJm451eRUVGXQBzeBmyxrVbHVx5WR+OH7rmj6dsvOi1GyL3q7Em2vyl+/wDQ+c52ObPontf1E/UWP6KyXsN8oWPp4P5+IH1ZEmlgX/YfZ7L7uw3UBKJIRIEoyRijJASEAgJAAAAAAAABpZW1K4Nw1dli51VLfmuze6Q8ZNI0bs26fVUR7I6TsfjJrReCT8SUWuRkwgtZyUdeS6y8FzfkVuTtRvhCOn80/wDqv1/A0XBR1l3e1OTbbS+KT4vzK17WhKShTrfLXnD6teM+T8tRVdEACoAAAAAAAAho8rInsYyQFfdWVuTSXdkDSvrA5nMoKHPxuZ2GVSUuZjgWvohtt2R9TZL6atLR9ZxXKXiuv9Tuca7eWvVc13nxee9VONlb3Zweq/VPufI+j+ju2I2wjbHwnHqn1iwOnRJjGSa1XFMyAlGSMUZICQgEBIBhddGEXKcowhFaylJqMYrtbfIDMhsq5bUnPhjVOa++u1qp8YrTen5LR/EeE9n7/HJseS/u2tzHXhUuf+9yZKPezbcHqseLypLhvQajTF99z4eUd59xrWxts+ut0j91Q5Vw8JWe/L/in2GO09rUY6XrbI18PZrXGbX8sFx0/I5bN9K7rfZxqvUx+9tSlZ4qHux894m9V01tlVENZOuitcvdrjr2JdWc9m+lafs4tTtf3licIeKj7z890rKdkztlv3SlbP4ptya7l2LuRfYWx0uhYVSxwr8h632SmtdVD3a14QXDzfE6nZOzI1paLQ28fFUehsFRIAAAAAAAAAAAADCSNa2BtnnOIFVkVFTlUHQ3VlfkVAcnm45qbI2g8W3e4+qm0rF2dk13r5HQZdBQ52MB9R2VmJpcU4y0cWnqtX+jLM+XeiG13CX8NY+D19U3+cP1X4dh9JwsjeWj5r812gbSMkYoxuvjD3npryXFyl4RXF+QHqed+RCtb05RgtUk5PTVvkl2vuNd2WT93SmPxS0lY/CPux8Xr4GVOLCD3+Mp6PW2x70tOvF+6u5aIlHlLJts+qh6qP3t8Wm++NPCX/04+DMa9mw3lOxyyLE9Yzu0luPthBJRg+9LXvZT7Y9OMarWNWuZavs1NerT/mt5fhqchtDbmZlaqU/UVP8A0qNYJrslP3pfLuJvVdttn0oxsduMrPW2r/Sp0smn2S6R82jks70my8j2aksSt/A961rvsfLyS8TUwNipacDoMTZiXQsRQ4WxdXvS1lKT1lKTcpSfa2+Z0GHstLoWlGIl0NyFaRRrUYiXQ2ox0MgAAAAAAAAAAAAAAAAAIaJAHjZE07qywaPGyAFHk0lPl45099RXZGOBxebjNcVqmnqmuDTXJo7P0S256yKUnpbXoprt7JeD/cqc3FKVSnRYrYc4810nHrF/32AfVp50pcI/Rrt4Sk/x4L8xvwrTsnKNcUvbsslpw/mnJ/M4TJ9MJtbuNVo/vLunhBP82/IqLabsiSlfZO5rlvP2Y/8ArFcI+RIrsdqentUNY4sHkz5b8tYUp/OXlou85XPzMrLf/kWycNfqYexUv9q5+L1Zt4eyu4ucXZ3cIijwtkJdC8xNmpdC0ow9Ddrp0KNSjDS6G7XUkeiRIEJEgAAAAAAAAAAAAAAAAAAAAAAAxkjIAa06zVtpLFo851gUWTjFPlYGvQ62yg8HiAc1j7L7i1x9n9xa14pswpA0qcPuNyujQ9lEyAxUTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFxG4ZACEiQAAAAAAAAAAAAAAAAAAAAAAD//Z" alt="no images"></img>}
                        <p className="card-text">
                            {discription}...
                        </p>
                        <Link to="/bookdetail" className="btn btn-dark">Details</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
