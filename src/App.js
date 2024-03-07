import React, { Component } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
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
                        <Route path='/' element={<EquationNavBar/>} />
                        <Route exact path='/History' element={<div><EquationNavBar/><EquationImageNoteCardCollection isPaginated itemsPerPage={2} /></div>} />
                        <Route exact path='/NewNote' element={<NewNote/>}/>
                        <Route exact path='/update/:cid' element={<EditNote/>}/>
                    </Routes>
                </header>
            </div>
        );
    }
}

export default withAuthenticator(App);