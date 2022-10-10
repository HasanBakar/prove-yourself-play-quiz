import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-base-700">
                    <div className="flex-1">
                        <h2 className="btn btn-ghost normal-case text-4xl"><span className="text-fuchsia-500">Prove </span> Yourself</h2>
                    </div>
                    <div id="nav-item" className="flex-none">
                        <ul className="menu menu-horizontal p-0 text-lg font-semibold">
                        <li><Link to ='/'>Topics</Link></li>
                        <li><Link to ='/Statistics'>Statistics</Link></li>
                        <li><Link to ='/Blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Nav;