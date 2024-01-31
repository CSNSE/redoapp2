/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equation } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "./utils";
import { schema } from "../models/schema";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";

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
  // const DesmosComponent = () => {
  //   useEffect(() => {
  //     // Step 2: Add HTML element as a container
  //     const elt = document.getElementById('calculator');
  //     // Step 3: Initialize Desmos calculator with JavaScript
  //     const calculator = Desmos.GraphingCalculator(elt);
  //     calculator.setExpression({ id: 'line1', latex: 'y=x', color: '#ff0000' });
  //   }, []); // Empty dependency array ensures useEffect runs only once after the initial render
  
  //   return (
  //     <div>
  //       <nav>
  //         <ul>
  //           <li><a href="/History">History</a></li>
  //         </ul>
  //       </nav>
  
  //       <div id="calculator" style={{ width: '100%', height: '600px' }}></div>
  
  //       {/* Additional content of your web page */}
  //     </div>
  //   );
  // };
  
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EquationImageNoteCard")}
      {...rest}
    >
      {/*
      <head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desmos Calc</title>

    <script src="https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/History">History</a></li>
        </ul>
    </nav>
    <div id="calculator" style="width: flex; height: 600px;"></div>


    <script>

        var elt = document.getElementById('calculator');
        var calculator = Desmos.GraphingCalculator(elt);
        calculator.setExpression({ id: 'line1', latex: 'y=' + equation.name, color: '#ff0000' });
    </script>


  </body>
  */}
      <Image
        width="unset"
        height="408px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={equation?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
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
                width="24px"
                height="24px"
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
                  width="24px"
                  height="24px"
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

                width="24px"
                height="24px"
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
                  width="24px"
                  height="24px"
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
                width="24px"
                height="24px"
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
                  width="24px"
                  height="24px"
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
            fontSize="16px"
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
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
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
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
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
          {/* <script src="https://www.desmos.com/api/v1.8/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6">
            <div id="calculator" style="width: 600px; height: 400px;"><script>
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt);
</script></div></script> */}
          
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
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
