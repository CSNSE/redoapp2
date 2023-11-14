/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NoteCardProps } from "./NoteCard";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type NoteCardCollectionOverridesProps = {
    NoteCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    NoteCard?: NoteCardProps;
} & EscapeHatchProps;
export declare type NoteCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NoteCardProps;
} & {
    overrides?: NoteCardCollectionOverridesProps | undefined | null;
}>;
export default function NoteCardCollection(props: NoteCardCollectionProps): React.ReactElement;
