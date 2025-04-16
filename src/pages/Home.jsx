import { useEffect, useState } from "react";
import MainNav from "../components/MainNav";

const Home = () => {

    useEffect(() => {
        console.log('mount del componente Home');

        return () => {
            console.log('unmount Home')
        }
    }, [])

    return (
        <>
            <div><h1>Home</h1></div>
            <MainNav />
        </>
    )


}

export default Home