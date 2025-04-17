import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function SinglePost() {

    const navigate = useNavigate()

    const [card, setCard] = useState([])

    const { id } = useParams()

    function getCard() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setCard(res.data)
            })
            .catch(err => console.error(err))
    }
    useEffect(getCard, [id])

    return (
        <>
            <div>
                <h1>{card.title}</h1>
                <p>{card.body}</p>
            </div>

        </>
    )
}


export default SinglePost
