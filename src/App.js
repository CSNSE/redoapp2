
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {EquationNoteCardCollection, EquationNavBar, EquationImageNoteCardCollection} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewNote from './NewNote'
import EditNote from './EditNote';

class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
            <Routes>
                <Route exact path='/' element={<div><EquationNavBar/><EquationImageNoteCardCollection isPaginated itemsPerPage={3} /></div>}/>
                <Route exact path='/NewNote' element={<NewNote/>}/>
                <Route exact path='/update/:cid' element={<EditNote/>}/>
            </Routes>
            </header></div>
    )
    }
}


export default withAuthenticator(App);
