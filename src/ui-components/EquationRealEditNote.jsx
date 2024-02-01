/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Equation } from "../models";
import {
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "./utils";
import { schema } from "../models/schema";
import { useEffect } from "react";
import MyIcon from "./MyIcon";
import { Button, Grid, Flex, Text, TextField, View, useTheme, Image, Icon, Dvider } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
import { fetchByPath, getOverrideProps, validateField, processFile } from "./utils";
import { generateClient } from "aws-amplify/api";
import { Field } from "@aws-amplify/ui-react/internal";  //MAH add!
import { StorageManager } from "@aws-amplify/ui-react-storage"; //MAH add!
import { DataStore } from "aws-amplify/datastore";
export default function EquationRealEditNote(props) {
  const {
    idProp,
    equation: equationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    equation: "",
    intercepts: "",
    domain: "",
    range: "",
    image: "",
  };
  const [equation, setEquation] = React.useState(initialValues.equation);
  const [intercepts, setIntercepts] = React.useState(initialValues.intercepts);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [range, setRange] = React.useState(initialValues.range);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = equationRecord
      ? { ...initialValues, ...equationRecord }
      : initialValues;
    setEquation(cleanValues.equation);
    setIntercepts(cleanValues.intercepts);
    setDomain(cleanValues.domain);
    setRange(cleanValues.range);
    setImage(cleanValues.image);
    setErrors({});
  };
  // const frameFourFourFourOnClick = useNavigateAction({
  //   type: "url",
  //   url: "/History",
  // });
  const frameFourThreeEightThreeOnMouseUp = useNavigateAction({
    type: "url",
    url: "/History",
  });
  const [equationRecord, setEquationRecord] = React.useState(equationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Equation, idProp)
        : equationModelProp;
      setEquationRecord(record);
    };
    queryData();
  }, [idProp, equationModelProp]);
  React.useEffect(resetStateValues, [equationRecord]);
  const validations = {
    equation: [],
    intercepts: [],
    domain: [],
    range: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
<Grid
      as="form"
      rowGap={tokens.space.xs.value}
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          equation,
          intercepts,
          domain,
          range,
          image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Equation.copyOf(equationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EquationUpdateForm")}
      {...rest}
    >
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
      {...getOverrideProps(overrides, "EquationRealEditNote")}
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
            onClick={() => {
              //frameFourFourFourOnClick();
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
            label="Equation"
            placeholder="x^2+8x+16"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isRequired={false}
        isReadOnly={false}
        value={equation}
            onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation: value,
              intercepts,
              domain,
              range,
            };
            const result = onChange(modelFields);
            value = result?.equation ?? value;
          }
          if (errors.equation?.hasError) {
            runValidationTasks("equation", value);
          }
          setEquation(value);
            }}
            onBlur={() => runValidationTasks("equation", equation)}
        errorMessage={errors.equation?.errorMessage}
        hasError={errors.equation?.hasError}
        {...getOverrideProps(overrides, "equation")}
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
            isRequired={false}
        isReadOnly={false}
        value={intercepts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts: value,
              domain,
              range,
            };
            const result = onChange(modelFields);
            value = result?.intercepts ?? value;
          }
          if (errors.intercepts?.hasError) {
            runValidationTasks("intercepts", value);
          }
          setIntercepts(value);
            }}
            onBlur={() => runValidationTasks("intercepts", intercepts)}
        errorMessage={errors.intercepts?.errorMessage}
        hasError={errors.intercepts?.hasError}
        {...getOverrideProps(overrides, "intercepts")}
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
            isRequired={false}
        isReadOnly={false}
        value={domain}
            onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain: value,
              range,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
            }}
            onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
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
            isRequired={false}
        isReadOnly={false}
        value={range}
            onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain,
              range: value,
            };
            const result = onChange(modelFields);
            value = result?.range ?? value;
          }
          if (errors.range?.hasError) {
            runValidationTasks("range", value);
          }
          setRange(value);
        }}
        onBlur={() => runValidationTasks("range", range)}
        errorMessage={errors.range?.errorMessage}
        hasError={errors.range?.hasError}
        {...getOverrideProps(overrides, "range")}
          ></TextField>
          <Field

label={"Image"}
isRequired={false}
isReadOnly={false}
>
<StorageManager
onUploadSuccess={({ key }) => {
  setImage(
    key
  );
}}
processFile={processFile}
accessLevel={"public"}
acceptedFileTypes={[]}
isResumable={false}
showThumbnails={true}
maxFileCount={1}
{...getOverrideProps(overrides, "image")}
></StorageManager>
</Field>
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
          }}
          onMouseUp={() => {
            frameFourThreeEightThreeOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Frame 4383")}
        >
          <Button
            children="Save"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || equationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </View>
      </Flex>
    </Flex>
</Grid>
  );
}
