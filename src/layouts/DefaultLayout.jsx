import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";



function DefaultLayout() {
    return (
        <>
            <header><MainNav /></header>
            <main><Outlet /></main>
            <header>Footer</header>
        </>
    )
}

export default DefaultLayout


//Outlet= colui che ti mostra le rotte