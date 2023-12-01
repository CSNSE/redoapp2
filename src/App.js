
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {UINoteCardCollection, UINewNote, NewNavBar, NoteCreateForm, NoteUpdateForm} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class App extends Component {
    render() {
    return (
        <div className="App"><header className="App-header">
          <Router>
            <Routes>
                <Route exact path='/' element={<div><NewNavBar/><UINoteCardCollection isPaginated itemsPerPage={3} /></div>}/>
                <Route exact path='/NewNote' element={<NoteCreateForm/>}/>
                <Route exact path='/create' element={<UINewNote/>}/>
                <Route exact path='/update' element={<NoteUpdateForm/>}/>
            </Routes>
          </Router>
            </header></div>
    )
    }
}


export default withAuthenticator(App);
