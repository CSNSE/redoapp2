/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
export default function HelpPageSyntax(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="600px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HelpPageSyntax")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="826px"
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
          direction="column"
          width="600px"
          height="17px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Help&#xA;"
            {...getOverrideProps(overrides, "Help")}
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
          
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="300"
            color="rgba(13,26,38,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="588px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Equation Syntax and Connotation:&#xA;Supported Characters and Functions&#xD;&#xA;Arithmetic Operators&#xD;&#xA;Addition: +&#xD;&#xA;Subtraction: -&#xD;&#xA;Multiplication: *&#xD;&#xA;Division: /&#xD;&#xA;Exponentiation: ^&#xD;&#xA;Use curly braces {} around multi-character exponents.&#xD;&#xA;&#xD;&#xA;Mathematical Constants&#xD;&#xA;Euler's number: \( e \) - Written as \e&#xD;&#xA;π (pi): Written as \pi&#xD;&#xA;Trig Functions (Forward and Inverse)&#xD;&#xA;Trigonometric functions:&#xD;&#xA;&#xD;&#xA;sin, cos, tan, cot, sec, csc&#xD;&#xA;Inverse trigonometric functions:&#xD;&#xA;&#xD;&#xA;arcsin, arccos, arctan, arccot, arcsec, arccsc&#xD;&#xA;Use formal function notation (\sin(x)) or shorthand notation (\sin x). &#xA;Use parentheses for clarity.&#xD;&#xA;&#xD;&#xA;Logarithms&#xD;&#xA;Natural logarithm: ln&#xD;&#xA;Base-10 logarithm: log&#xD;&#xA;Specify arbitrary bases using subscripts, e.g., \log_a(b).&#xD;&#xA;&#xD;&#xA;Square Root&#xD;&#xA;Square root: \( \sqrt{x} \) is written as \sqrt{x}&#xD;&#xA;&#xD;&#xA;Table Columns&#xD;&#xA;Tables are specified by an array of their columns. Values in each column are &#xA;either explicitly specified when the column header is a unique variable or &#xA;computed if the header is an expression.&#xD;&#xA;-&#xD;&#xA;Domain and Range Syntax:&#xD;&#xA;When the restriction does not have a definite end use parenthesis. Examples: (-∞,∞)&#xD;&#xA;When it is use brackets. e.g. (8,9]&#xD;&#xA;When It has a split input with discontinuity use the union symbol ∪. e.g. (1,5)∪(6,10] "
            {...getOverrideProps(
              overrides,
              "Equation Syntax and Connotation: Supported Characters and Functions Arithmetic Operators Addition: + Subtraction: - Multiplication: * Division: / Exponentiation: ^ Use curly braces {} around multi-character exponents. Mathematical Constants Euler's number: \\( e \\) - Written as \\e \u03C0 (pi): Written as \\pi Trig Functions (Forward and Inverse) Trigonometric functions: sin, cos, tan, cot, sec, csc Inverse trigonometric functions: arcsin, arccos, arctan, arccot, arcsec, arccsc Use formal function notation (\\sin(x)) or shorthand notation (\\sin x). Use parentheses for clarity. Logarithms Natural logarithm: ln Base-10 logarithm: log Specify arbitrary bases using subscripts, e.g., \\log_a(b). Square Root Square root: \\( \\sqrt{x} \\) is written as \\sqrt{x} Table Columns Tables are specified by an array of their columns. Values in each column are either explicitly specified when the column header is a unique variable or computed if the header is an expression."
            )}
          ></Text>
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
          {...getOverrideProps(overrides, "Frame 4383")}
        >
        </View>
      </Flex>
    </Flex>
  );
}
