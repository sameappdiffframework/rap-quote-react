import React from 'react';
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
                        <a href="/">All quotes</a>
                    </li>
                    <li>
                        <a href="/about.html">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
