import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


function SinglePost() {

    const navigate = useNavigate()
    const [prevId, setPrevId] = useState(0)
    const [postId, setPostId] = useState(0)


    const [card, setCard] = useState([])

    const { id } = useParams()

    function getCard() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setCard(res.data)
                setPrevId(parseInt(id) - 1)
                setPostId(parseInt(id) + 1)
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
            <Link to={`/posts/${prevId}`}>Post Precedente</Link>
            <Link to={`/posts/${postId}`}>Post Prossimo</Link>

        </>
    )
}


export default SinglePost
