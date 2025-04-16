import { useEffect, useState } from "react";

const Posts = () => {

    useEffect(() => {
        console.log('mount del componente Posts');

        return () => {
            console.log('unmount Posts')
        }
    }, [])

    return (
        <>
            <div><h1>posts</h1></div>
        </>
    )


}

export default Posts