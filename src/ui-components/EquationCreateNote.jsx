/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equation } from "../models";
import { getOverrideProps, useNavigateAction, processFile } from "./utils";
import {
  useDataStoreCreateAction,
  useStateMutationAction,
} from "./utils";
import { schema } from "../models/schema";
import { useEffect, useState } from "react";
import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import MyIcon from "./MyIcon";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
export default function EquationCreateNote(props) {
  const { equation, overrides, ...rest } = props;
  const [
    textFieldFourTwoSixOneNineSevenNineValue,
    setTextFieldFourTwoSixOneNineSevenNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldFourTwoSixOneNineEightZeroValue,
    setTextFieldFourTwoSixOneNineEightZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldFourTwoSixOneNineEightOneValue,
    setTextFieldFourTwoSixOneNineEightOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldFourTwoSixOneNineEightTwoValue,
    setTextFieldFourTwoSixOneNineEightTwoValue,
  ] = useStateMutationAction("");
  
  const [
    imageName,
    setImageName,
  ] = useState("");
  const frameFourFourFourOnClick = useNavigateAction({ type: "url", url: "/" });
  const frameFourThreeEightThreeOnMouseUp = useNavigateAction({
    type: "url",
    url: "/History",
  });
  const frameFourThreeEightThreeOnMouseDown = useDataStoreCreateAction({
    fields: {
      equation: textFieldFourTwoSixOneNineSevenNineValue,
      intercepts: textFieldFourTwoSixOneNineEightZeroValue,
      domain: textFieldFourTwoSixOneNineEightOneValue,
      range: textFieldFourTwoSixOneNineEightTwoValue,
      image: imageName,
    },
    model: Equation,
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldFourTwoSixOneNineSevenNineValue === "" &&
      equation !== undefined &&
      equation?.equation !== undefined
    )
      setTextFieldFourTwoSixOneNineSevenNineValue(equation?.equation);
  }, [equation]);
  useEffect(() => {
    if (
      textFieldFourTwoSixOneNineEightZeroValue === "" &&
      equation !== undefined &&
      equation?.intercepts !== undefined
    )
      setTextFieldFourTwoSixOneNineEightZeroValue(equation?.intercepts);
  }, [equation]);
  useEffect(() => {
    if (
      textFieldFourTwoSixOneNineEightOneValue === "" &&
      equation !== undefined &&
      equation?.domain !== undefined
    )
      setTextFieldFourTwoSixOneNineEightOneValue(equation?.domain);
  }, [equation]);
  useEffect(() => {
    if (
      textFieldFourTwoSixOneNineEightTwoValue === "" &&
      equation !== undefined &&
      equation?.range !== undefined
    )
      setTextFieldFourTwoSixOneNineEightTwoValue(equation?.range);
  }, [equation]);
  
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="698px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EquationCreateNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="698px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
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
              frameFourFourFourOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 444")}
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
              type="close"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </View>
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Equation"
            {...getOverrideProps(overrides, "Create Equation")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="550px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Equation"
            placeholder="x^2+8x+16"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourTwoSixOneNineSevenNineValue}
            onChange={(event) => {
              setTextFieldFourTwoSixOneNineSevenNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4261979")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Intercepts"
            placeholder="x = 6,8   y = 0"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourTwoSixOneNineEightZeroValue}
            onChange={(event) => {
              setTextFieldFourTwoSixOneNineEightZeroValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4261980")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Domain"
            placeholder="[1,4]"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourTwoSixOneNineEightOneValue}
            onChange={(event) => {
              setTextFieldFourTwoSixOneNineEightOneValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4261981")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Range"
            placeholder="[5,6]"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourTwoSixOneNineEightTwoValue}
            onChange={(event) => {
              setTextFieldFourTwoSixOneNineEightTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4261982")}
          ></TextField>
           <Field

        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImageName(
              key
            );
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "image")}
        ></StorageManager>
      </Field>
        </Flex>
        <View
          width="71px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onMouseUp={() => {
            frameFourThreeEightThreeOnMouseUp();
          }}
          onMouseDown={() => {
            frameFourThreeEightThreeOnMouseDown();
          }}
          {...getOverrideProps(overrides, "Frame 4383")}
        >
          <Buttondefaultfalseprimary
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            backgroundColor="rgba(78,165,202,1)"
            {...getOverrideProps(overrides, "Create/default/false/primary")}
          ></Buttondefaultfalseprimary>
          
        </View>
      </Flex>
    </Flex>
  );
}
