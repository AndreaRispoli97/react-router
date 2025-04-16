import { Link, NavLink } from "react-router-dom";


function MainNav() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home Page</Link></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/post'>Posts</NavLink></li>
            </ul>

        </nav>
    )
}

export default MainNav