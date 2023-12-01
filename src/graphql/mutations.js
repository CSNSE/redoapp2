/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEquation = /* GraphQL */ `
  mutation CreateEquation(
    $input: CreateEquationInput!
    $condition: ModelEquationConditionInput
  ) {
    createEquation(input: $input, condition: $condition) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEquation = /* GraphQL */ `
  mutation UpdateEquation(
    $input: UpdateEquationInput!
    $condition: ModelEquationConditionInput
  ) {
    updateEquation(input: $input, condition: $condition) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEquation = /* GraphQL */ `
  mutation DeleteEquation(
    $input: DeleteEquationInput!
    $condition: ModelEquationConditionInput
  ) {
    deleteEquation(input: $input, condition: $condition) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
