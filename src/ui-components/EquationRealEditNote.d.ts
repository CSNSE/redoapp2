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
export declare type EquationRealEditNoteOverridesProps = {
    EquationRealEditNote?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "Edit Equation"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4061927?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4061928?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4061929?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4061930?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42771082?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 4383"?: PrimitiveOverrideProps<ViewProps>;
    "Save/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type EquationRealEditNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    equ?: Equation;
} & {
    overrides?: EquationRealEditNoteOverridesProps | undefined | null;
}>;
export default function EquationRealEditNote(props: EquationRealEditNoteProps): React.ReactElement;
