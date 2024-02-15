/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
//import * as React from "react";
import React, { useRef, useEffect, useState } from "react"; 
import { Equation } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "./utils";
import { schema } from "../models/schema";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import Desmos from 'desmos'

export default function EquationImageNoteCard(props) {
  const { equation, overrides, ...rest } = props;
  console.log("export image: " + equation?.image);
  
  const frameFourFourZeroOnClick = useNavigateAction({
    type: "url",
    url: `${"/update/"}${equation?.id}`,
  });
  const frameFourThreeEightOnMouseUp = useNavigateAction({
    type: "url",
    url: "/History",
  });
  const frameFourThreeEightOnClick = useDataStoreDeleteAction({
    id: equation?.id,
    model: Equation,
    schema: schema,
  });
  const frameFourThreeNineEightOnClick = useNavigateAction({
    type: "url",
    url: "/Desmos.html",
  });
  
//
const [intercepts, setIntercepts] = useState(null);
const [domain, setDomain] = useState({ min: null, max: null });
const [range, setRange] = useState({ min: null, max: null });


const desmosContainerRef = useRef(null);
  useEffect(() => {
    
    const elt = desmosContainerRef.current;
    if (!elt) return;
    //Clem Notes: Create calc object 
    const calculator = Desmos.GraphingCalculator(elt);
    

    //IF you are looking at this Mr. Headrick, This took ABSOLUTE AGES TO DO. 
    //Set equation
    calculator.setExpression({ id: 'graph1', latex: `F(x)=${equation?.equation}` });
    calculator.setExpression({ id: 'graph3', latex: `P(x)=0` });
    //expressions for Finding y intercept
    calculator.setExpression({ id: 'graph2', latex: `F(0)` });
    //expressions for finding x intercept using black magic
    calculator.setExpression({ id: 'graph4', latex: `P(x_1)~F(x_1)`});
    calculator.setExpression({ id: 'graph5', latex: `y_1=F(x_1)`});
    calculator.setExpression({ id: 'graph6', latex: `(x_1,y_1)`, color: Desmos.Colors.ORANGE});
    //Get values of Intercepts to set
    var helper1 = calculator.HelperExpression({id: 'graph1', latex: 'F(0)'});
    helper1.observe('numericValue', function() {
      const yAxisIntercept = helper1.numericValue;
      if (yAxisIntercept !== null) {
        setIntercepts(prevState => ({ ...prevState, yAxisIntercept }));
      }
    });
    var helper2 = calculator.HelperExpression({id: 'graph1', latex: 'x_1'});
    helper2.observe('numericValue', function() {
      const xAxisIntercept = helper2.numericValue;
      if (xAxisIntercept !== null) {
        setIntercepts(prevState => ({ ...prevState, xAxisIntercept }));
      }
    });
    //Getting Domain and Range

    var domainExpression = calculator.HelperExpression({ id: 'graph1', latex: 'F(x)' });
    domainExpression.observe('numericValue', function() {
      
      const xValue = domainExpression.numericValue;
      console.log("Domain xValue:", xValue); // Debugging statement
      if (!isNaN(xValue)) {
        setDomain(prevState => ({ ...prevState, min: Math.min(prevState.min || xValue, xValue), max: Math.max(prevState.max || xValue, xValue) }));
      }
    });

    var rangeExpression = calculator.HelperExpression({ id: 'graph1', latex: 'F(x)' });
    rangeExpression.observe('numericValue', function() {
      const yValue = rangeExpression.numericValue;
      console.log("Range yValue:", yValue); // Debugging statement
      if (!isNaN(yValue)) {
        setRange(prevState => ({ ...prevState, min: Math.min(prevState.min || yValue, yValue), max: Math.max(prevState.max || yValue, yValue) }));
      }
    });
    

    //Set Value of intercepts using values
    // Calculate intercepts only when both yAxisIntercept and xAxisIntercept are defined
    // This is commented out because Model is ReadOnly so the following code doesn't work equation.intercepts = helper.numericValue;
    //
    return () => {
      calculator.destroy();

    };
  }, [equation]);
// This Change from another ISSUE also fixes this ISSUE 
//so the commit should have also went to this one but i have to make another save and commit
//

//


  return (
    <Flex
      gap="0"
      direction="column"
      width="600px"
      height="600px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EquationImageNoteCard")}
      {...rest}
    >
      <div ref={desmosContainerRef} style={{ width: '600px', height: '400px' }}></div>
      
  
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="200px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 439")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 437")}
            >
              <View
                width="30px"
                height="30px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  frameFourFourZeroOnClick();
                }}
                {...getOverrideProps(overrides, "Frame 440")}
              >
                <MyIcon
                  width="30px"
                  height="30px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  type="edit"
                  {...getOverrideProps(overrides, "MyIcon42761065")}
                ></MyIcon>
              </View>
              <View
                width="30px"
                height="30px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                onMouseUp={() => {
                  frameFourThreeEightOnMouseUp();
                }}
                onClick={() => {
                  frameFourThreeEightOnClick();
                }}
                {...getOverrideProps(overrides, "Frame 438")}
              >
                <MyIcon
                  width="30px"
                  height="30px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  type="delete"
                  {...getOverrideProps(overrides, "MyIcon42761067")}
                ></MyIcon>
              </View>
              <View
                width="30px"
                height="30px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  frameFourThreeNineEightOnClick();
                }}
                {...getOverrideProps(overrides, "Frame 4398")}
              >
                <MyIcon
                  width="30px"
                  height="30px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  type="content"
                  {...getOverrideProps(overrides, "MyIcon42981042")}
                ></MyIcon>
              </View>
            </Flex>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="15px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={equation?.equation}
            {...getOverrideProps(overrides, "Equation")}
          ></Text>
                  {intercepts && (
          <>
            <Text
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="15px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.03px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`Y-Intercept: ${intercepts.yAxisIntercept}`}
              {...getOverrideProps(overrides, "Intercepts")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="15px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.03px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`X-Intercept: ${intercepts.xAxisIntercept}`}
              {...getOverrideProps(overrides, "Intercepts")}
            ></Text>
          </>
        )}
          {domain && (
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="15px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.03px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`Domain: [${domain.min}, ${domain.max}]`}
            {...getOverrideProps(overrides, "Domain")}
          ></Text>
        )}
        {range && (
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="15px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.03px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`Range: [${range.min}, ${range.max}]`}
            {...getOverrideProps(overrides, "Range")}
          ></Text>
        )}
        </Flex>
      </Flex>
    </Flex>
  );
}
