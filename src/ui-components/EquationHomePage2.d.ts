/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type EquationHomePage2OverridesProps = {
    EquationHomePage2?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    HomePage?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField42871083?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42871084?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 4383"?: PrimitiveOverrideProps<ViewProps>;
    "Save/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type EquationHomePage2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EquationHomePage2OverridesProps | undefined | null;
}>;
export default function EquationHomePage2(props: EquationHomePage2Props): React.ReactElement;
