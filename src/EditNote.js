import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { EquationNavBar, EquationRealEditNote, EquationUpdateForm, HelpPageSyntax } from "./ui-components";

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
                <EquationNavBar />
                <EquationRealEditNote idProp={cid}/>
                <HelpPageSyntax/>
            </header></div>
        );
    }

export default EditNote;