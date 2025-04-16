import { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
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
            <MainNav />
        </>
    )


}

export default Posts