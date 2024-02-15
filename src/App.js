import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewNote from './NewNote';
import {EquationNoteCardCollection, EquationNavBar, EquationImageNoteCardCollection, EquationHomePage2, HelpPageSyntax} from "./ui-components";
import EditNote from './EditNote';
import DesmosCalculator from './DesmosCalculator';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHomePage: true // Set to true initially to redirect on startup
            
        };
    }

    componentDidMount() {
        // After 3 seconds, stop redirecting to HomePage.html
        setTimeout(() => {
            this.setState({ redirectToHomePage: false });
        }, 1000); // Adjust the delay as needed
    }

    render() {
        const { redirectToHomePage } = this.state;

        // If redirectToHomePage is true, redirect to HomePage.html
        if (redirectToHomePage) {
            return null; // You can render a loading spinner or message here if needed
        }

        // Once redirectToHomePage is false, render the app with the routes
        return (
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route exact path='/History' element={<div><EquationNavBar/><EquationImageNoteCardCollection isPaginated itemsPerPage={2} /></div>} />
                        <Route exact path='/NewNote' element={<NewNote/>}/>
                        <Route exact path='/update/:cid' element={<EditNote/>}/>
                    </Routes>
                </header>
            </div>
        );
    }
}
//This is an empty commite because I actually 
// Placeholder component for HomePage.html if needed
const HomePage = () => {
    // You can adjust this to serve HomePage.html or redirect to it if it's a route
    window.location.href = "/HomePage.html";
    return null; // You can render a loading spinner or message here if needed
};
const HelpFunctions = () => {
    // You can adjust this to serve HomePage.html or redirect to it if it's a route
    window.location.href = "HelpFunctions.html";
    return null; // You can render a loading spinner or message here if needed
};

export default withAuthenticator(App);