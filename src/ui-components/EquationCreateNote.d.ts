/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Equation } from "../models";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EquationCreateNoteOverridesProps = {
    EquationCreateNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "Create Equation"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4261979?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4261980?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4261981?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4261982?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42771075?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 4383"?: PrimitiveOverrideProps<ViewProps>;
    "Create/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type EquationCreateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    equation?: Equation;
} & {
    overrides?: EquationCreateNoteOverridesProps | undefined | null;
}>;
export default function EquationCreateNote(props: EquationCreateNoteProps): React.ReactElement;
