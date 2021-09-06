import React from 'react';

export function About() {
    return (
        <>
            <h1>About Rap Quotes</h1>
            <p>
                This is a hard-coded mock up for the <em>Same App, Different Framework</em> project.
                SADF aims to recreate the same app using different frameworks (Angular, React, Vue, etc, etc) in
                order to
                compare and learn each framework.
            </p>

            <p>
                Rap Quotes is the skeleton for that common app in the project.
                It was created here by hand just to work through all the desired CSS and
                HTML <em>before</em> attempting to
                recreate the concept in other frameworks.
            </p>

            <p>
                The app simply displays a select few of dope rap bars from various rappers.
                Nothing too fancy, but robust enough to serve as more than a simple Hello, World app.
            </p>

            <h2>Features</h2>

            <p>
                In order to serve as a good app, this app aims to use the following features that are commonly seen
                during
                web app development.
            </p>

            <ul className="no-bullets">
                <li>
                    <input checked={true} disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>CRUD</strong>: the big four verbs can be applied to each quote in each framework
                </li>
                <li>
                    <input checked={true} disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>https calls</strong>:
                </li>
                <li>
                    <input checked={true} disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>form validation</strong>: creating a quote requires a form
                </li>
                <li>
                    <input checked={true} disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>modal</strong>: the create form is displayed in a modal
                </li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>toast</strong>: on success/fail of CRUD ops
                </li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>sortable/filterable table</strong>: perhaps a table view of all the quotes?
                </li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>grid/table view switcher</strong></li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>routing/nav</strong>: main page, table view, about page
                </li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>testing</strong></li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>search</strong>: query all the quotes
                </li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>date picker</strong>:
                </li>
                <li>
                    <input disabled={true} type="checkbox"/>
                    &nbsp;
                    <strong>localization</strong>: this may actually be difficult with slang in quotes 🤔
                </li>
            </ul>
        </>
    );
}
