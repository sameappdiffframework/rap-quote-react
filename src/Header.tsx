import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            {/*<a href="#" onClick="openModal()">Create quote</a>*/}
                            {/*eslint-disable-next-line*/}
                            <a href="#">Create quote</a>
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
}
