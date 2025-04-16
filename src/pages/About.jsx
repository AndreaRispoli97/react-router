import { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
const About = () => {

    useEffect(() => {
        console.log('mount del componente About');

        return () => {
            console.log('unmount About')
        }
    }, [])

    return (
        <>
            <div><h1>about</h1></div>
            <MainNav />
        </>

    )


}

export default About