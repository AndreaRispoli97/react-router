import { Link, NavLink } from "react-router-dom";


function MainNav() {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to='/'>Home Page</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/post'>Posts</NavLink></li>
            </ul>

        </nav>
    )
}

export default MainNav