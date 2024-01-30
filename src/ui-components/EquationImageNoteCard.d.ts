/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Equation } from "../models";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type EquationImageNoteCardOverridesProps = {
    EquationImageNoteCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon42761065?: MyIconProps;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon42761067?: MyIconProps;
    "Frame 4398"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon42981042?: MyIconProps;
    Equation?: PrimitiveOverrideProps<TextProps>;
    Intercepts?: PrimitiveOverrideProps<TextProps>;
    Domain?: PrimitiveOverrideProps<TextProps>;
    Range?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EquationImageNoteCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    equation?: Equation;
} & {
    overrides?: EquationImageNoteCardOverridesProps | undefined | null;
}>;
export default function EquationImageNoteCard(props: EquationImageNoteCardProps): React.ReactElement;
