/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Note } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "./utils";
import { schema } from "../models/schema";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function UINewNote(props) {
  const { note, overrides, ...rest } = props;
  const [
    textFieldThreeEightFourSevenThreeFourOneFourValue,
    setTextFieldThreeEightFourSevenThreeFourOneFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightFourSevenThreeFourOneFiveValue,
    setTextFieldThreeEightFourSevenThreeFourOneFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightFourSevenThreeFourOneSixValue,
    setTextFieldThreeEightFourSevenThreeFourOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeNineNineOneFiveTwoNineValue,
    setTextFieldThreeNineNineOneFiveTwoNineValue,
  ] = useStateMutationAction("");
  const editProfileOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldThreeEightFourSevenThreeFourOneFourValue,
      description: textFieldThreeEightFourSevenThreeFourOneFiveValue,
      author: textFieldThreeEightFourSevenThreeFourOneSixValue,
      image: textFieldThreeNineNineOneFiveTwoNineValue,
    },
    model: Note,
    schema: schema,
  });
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
      {...getOverrideProps(overrides, "UINewNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
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
          onClick={() => {
            editProfileOnClick();
          }}
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
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
            children="New Note"
            {...getOverrideProps(overrides, "New Note")}
          ></Text>
        </Flex>
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
          {...getOverrideProps(overrides, "Profile")}
        >
          <View
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(255,0,0,1), rgba(255,255,255,0))"
            {...getOverrideProps(overrides, "image")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Upload New Image")}
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
            label="Note Name"
            placeholder="Name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFourSevenThreeFourOneFourValue}
            onChange={(event) => {
              setTextFieldThreeEightFourSevenThreeFourOneFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38473414")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Description"
            placeholder="Description"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFourSevenThreeFourOneFiveValue}
            onChange={(event) => {
              setTextFieldThreeEightFourSevenThreeFourOneFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38473415")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="link"
            placeholder="https://link"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineNineOneFiveTwoNineValue}
            onChange={(event) => {
              setTextFieldThreeNineNineOneFiveTwoNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3991529")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="user"
            placeholder="user@gmail.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFourSevenThreeFourOneSixValue}
            onChange={(event) => {
              setTextFieldThreeEightFourSevenThreeFourOneSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38473416")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
