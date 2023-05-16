import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to='/something'>something</Link>
            <Link to='/something2'>something2</Link>
            <Link to='/posts'>posts</Link>
        </div>
    )
}

export default NavBar