/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtondefaultfalseprimaryProps } from "./Buttondefaultfalseprimary";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HelpPageSyntaxOverridesProps = {
    HelpPageSyntax?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Help?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    "Equation Syntax and Connotation: Supported Characters and Functions Arithmetic Operators Addition: + Subtraction: - Multiplication: * Division: / Exponentiation: ^ Use curly braces {} around multi-character exponents. Mathematical Constants Euler's number: \\( e \\) - Written as \\e \u03C0 (pi): Written as \\pi Trig Functions (Forward and Inverse) Trigonometric functions: sin, cos, tan, cot, sec, csc Inverse trigonometric functions: arcsin, arccos, arctan, arccot, arcsec, arccsc Use formal function notation (\\sin(x)) or shorthand notation (\\sin x). Use parentheses for clarity. Logarithms Natural logarithm: ln Base-10 logarithm: log Specify arbitrary bases using subscripts, e.g., \\log_a(b). Square Root Square root: \\( \\sqrt{x} \\) is written as \\sqrt{x} Table Columns Tables are specified by an array of their columns. Values in each column are either explicitly specified when the column header is a unique variable or computed if the header is an expression."?: PrimitiveOverrideProps<TextProps>;
    "Frame 4383"?: PrimitiveOverrideProps<ViewProps>;
    "Save/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type HelpPageSyntaxProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HelpPageSyntaxOverridesProps | undefined | null;
}>;
export default function HelpPageSyntax(props: HelpPageSyntaxProps): React.ReactElement;
