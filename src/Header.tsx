import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header(props: { onCreateClick: () => void }) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button onClick={props.onCreateClick}>Create quote</button>
                    </li>
                    <li>
                        <NavLink to="/">All quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
