import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <nav>
            <div className="navbar bg-base-700">
                <div className="flex-1">
                    <h2 className="btn btn-ghost normal-case text-4xl">Prove Yourself</h2>
                </div>
                <div id="nav-item" className="flex-none">
                    <ul className="menu menu-horizontal p-0 text-lg">
                    <li><a>Topics</a></li>
                    <li><a>Statistics</a></li>
                    <li><a>Blogs</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;