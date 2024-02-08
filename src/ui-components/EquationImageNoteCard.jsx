/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
//import * as React from "react";
import React, { useRef, useEffect } from "react"; 
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
const desmosContainerRef = useRef(null);
  useEffect(() => {
    const elt = desmosContainerRef.current;
    if (!elt) return;
    
    const calculator = Desmos.GraphingCalculator(elt);
    calculator.setExpression({ id: 'graph1', latex: `${equation?.equation}` });

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
            lineHeight="20px"
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
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children={equation?.intercepts}
            {...getOverrideProps(overrides, "Intercepts")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children={equation?.domain}
            {...getOverrideProps(overrides, "Domain")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
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
            children={equation?.range}
            {...getOverrideProps(overrides, "Range")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
