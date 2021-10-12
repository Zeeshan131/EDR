import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>EDD Automation Tool </h1>
                <ul>
                    <li><a href="#">EDR Automation</a></li>
                    <li>Data Room Automation</li>
                    <li>Admin Page</li>
                </ul>
            </div>
        );
    }
}
export default Home;
