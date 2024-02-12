import React, { Component } from 'react';
import { EquationCreateNote, HelpPageSyntax, EquationNavBar } from "./ui-components";
import "./App.css";

class NewNote extends Component {
    render(){
        return (
            <div className="container">
                <header className="App-header">
                <div><h1></h1></div>
                    <EquationNavBar/>
                    <div><h1></h1></div>

                    <EquationCreateNote className="equation-create-note" />
                    <div><h1></h1></div>
                    <HelpPageSyntax className="help-page-syntax" />
                    <div><h1></h1></div>
                    
                </header>
            </div>
        );
    }
}

export default NewNote;
