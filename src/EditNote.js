import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NewNavBar, EquationRealEditNote, EquationUpdateForm } from "./ui-components";

import { generateClient } from "aws-amplify/api";
import "./App.css";
import { getEquation } from "./graphql/queries";
import { ConsoleLogger } from '@aws-amplify/core';
function EditNote() {
    return <Put />;
}

    function Put(){
        const { cid } = useParams();
        console.log("found: "+{cid})
        return (
            <div><header className="App-header">
                <NewNavBar />
                <EquationRealEditNote idProp={cid}/>
            </header></div>
        );
    }

export default EditNote;