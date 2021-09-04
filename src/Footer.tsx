import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <ul className="no-bullets">
                <li>
                    <a href="https://github.com/sameappdiffframework" target="_blank" rel="noreferrer">
                        Same App, Different Framework
                    </a>
                </li>
                <li>
                    <a href="https://github.com/sameappdiffframework/rap-quotes-angular" target="_blank"
                       rel="noreferrer">
                        Source code
                    </a>
                </li>
            </ul>
            <p>
                This site is made by
                <a href="https://github.com/colbywhite" target="_blank" rel="noreferrer">
                    Colby M. White
                </a>
                and hosted for free by Netlify.
                It is a part of the
                <a href="https://github.com/sameappdiffframework" target="_blank" rel="noreferrer">
                    Same App, Different Framework
                </a>
                project.
            </p>
        </footer>

    )
}
