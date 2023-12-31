import React, { Component } from 'react'
import { EquationCreateForm, EquationCreateNote, NewNavBar } from "./ui-components";
import "./App.css";

class NewNote extends Component {
    render(){
        return (<Put />);
    }
}
//Useless change
  function Put() {
    return (
      <div><header className="App-header">
        <NewNavBar/>
        <EquationCreateNote style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default NewNote