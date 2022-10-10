import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
                        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <img src="https://www.studysection.com/img/ss-banner.png" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                <h1 className="text-4xl font-bold">Great Opportunity to Prove Yourself by <span className="text-fuchsia-500">QUIZ</span> !!!</h1>
                <p className="py-6">"If you hear a voice within you say, 'you cannot paint,' then, by all means, paint and that voice will be silenced" - Vincent Van Gogh</p>
                <p className="py-6">"Don't say you don't have enough time. You have the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein" - H Jackson Brown Jr</p>
                <button className="btn btn-primary"><Link to = '/Topics'>Get Started</Link> </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;