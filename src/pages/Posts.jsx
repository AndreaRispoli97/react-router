import { useEffect, useState } from "react";
import axios from "axios"

const Posts = () => {
    const [data, setData] = useState([])



    function arrayData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
            })
    }

    useEffect((arrayData), [])
    console.log(data);

    return (
        <>
            <div>
                <h1>posts</h1>
                {data.map(({ id, title, body }) => (
                    <div key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>

                ))}
            </div>
        </>
    )


}

export default Posts