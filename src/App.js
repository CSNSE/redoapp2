import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewNote from './NewNote';
import {EquationNoteCardCollection, EquationNavBar, EquationImageNoteCardCollection, EquationHomePage2, HelpPageSyntax} from "./ui-components";
import EditNote from './EditNote';
import DesmosCalculator from './DesmosCalculator';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route exact path='/' element={<EquationNavBar/>}/>
                        <Route exact path='/History/' element={<div><EquationNavBar/><EquationImageNoteCardCollection isPaginated itemsPerPage={2} /></div>} />
                        <Route exact path='/NewNote' element={<NewNote/>}/>
                        <Route exact path='/update/:cid' element={<EditNote/>}/>
                    </Routes>
                </header>
            </div>
        );
    }
}

export default withAuthenticator(App);