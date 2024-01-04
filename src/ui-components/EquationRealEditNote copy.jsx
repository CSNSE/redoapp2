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
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "./utils";
import { schema } from "../models/schema";
import { useEffect } from "react";
import MyIcon from "./MyIcon";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
export default function EquationRealEditNote(props) {
  const { equ, overrides, ...rest } = props;
  const [
    textFieldFourZeroSixOneNineTwoSevenValue,
    setTextFieldFourZeroSixOneNineTwoSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldFourZeroSixOneNineTwoEightValue,
    setTextFieldFourZeroSixOneNineTwoEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldFourZeroSixOneNineTwoNineValue,
    setTextFieldFourZeroSixOneNineTwoNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldFourZeroSixOneNineThreeZeroValue,
    setTextFieldFourZeroSixOneNineThreeZeroValue,
  ] = useStateMutationAction("");
  const frameFourFourFourOnClick = useNavigateAction({ type: "url", url: "/" });
  const frameFourThreeEightThreeOnClick = useDataStoreUpdateAction({
    fields: {
      equation: textFieldFourZeroSixOneNineTwoSevenValue,
      intercepts: textFieldFourZeroSixOneNineTwoEightValue,
      domain: textFieldFourZeroSixOneNineTwoNineValue,
      range: textFieldFourZeroSixOneNineThreeZeroValue,
    },
    id: equ?.id,
    model: Equation,
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldFourZeroSixOneNineTwoSevenValue === "" &&
      equ !== undefined &&
      equ?.equation !== undefined
    )
      setTextFieldFourZeroSixOneNineTwoSevenValue(equ?.equation);
  }, [equ]);
  useEffect(() => {
    if (
      textFieldFourZeroSixOneNineTwoEightValue === "" &&
      equ !== undefined &&
      equ?.intercepts !== undefined
    )
      setTextFieldFourZeroSixOneNineTwoEightValue(equ?.intercepts);
  }, [equ]);
  useEffect(() => {
    if (
      textFieldFourZeroSixOneNineTwoNineValue === "" &&
      equ !== undefined &&
      equ?.domain !== undefined
    )
      setTextFieldFourZeroSixOneNineTwoNineValue(equ?.domain);
  }, [equ]);
  useEffect(() => {
    if (
      textFieldFourZeroSixOneNineThreeZeroValue === "" &&
      equ !== undefined &&
      equ?.range !== undefined
    )
      setTextFieldFourZeroSixOneNineThreeZeroValue(equ?.range);
  }, [equ]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="616px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EquationRealEditNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="616px"
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
            children="Edit Equation"
            {...getOverrideProps(overrides, "Edit Equation")}
          ></Text>
        </Flex>
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
            value={textFieldFourZeroSixOneNineTwoSevenValue}
            onChange={(event) => {
              setTextFieldFourZeroSixOneNineTwoSevenValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4061927")}
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
            value={textFieldFourZeroSixOneNineTwoEightValue}
            onChange={(event) => {
              setTextFieldFourZeroSixOneNineTwoEightValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4061928")}
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
            value={textFieldFourZeroSixOneNineTwoNineValue}
            onChange={(event) => {
              setTextFieldFourZeroSixOneNineTwoNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4061929")}
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
            value={textFieldFourZeroSixOneNineThreeZeroValue}
            onChange={(event) => {
              setTextFieldFourZeroSixOneNineThreeZeroValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4061930")}
          ></TextField>
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
          onClick={() => {
            frameFourThreeEightThreeOnClick();
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
            {...getOverrideProps(overrides, "Save/default/false/primary")}
          ></Buttondefaultfalseprimary>
        </View>
      </Flex>
    </Flex>
  );
}
