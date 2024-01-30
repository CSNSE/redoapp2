/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import MyIcon from "./MyIcon";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
export default function EquationHomePage2(props) {
  const { overrides, ...rest } = props;
  const frameFourThreeEightThreeOnClick = useNavigateAction({
    type: "url",
    url: "/History",
  });
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
      {...getOverrideProps(overrides, "EquationHomePage2")}
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
            children="HomePage"
            {...getOverrideProps(overrides, "HomePage")}
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
            label="Info"
            placeholder="detail"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42871083")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Link"
            placeholder="Link"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField42871084")}
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
