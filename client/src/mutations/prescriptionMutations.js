import { gql } from "@apollo/client";

const ADD_PRESCRIPTION = gql`
    mutation addPrescription($name: String!, $frequency: String!, $time: String!, $prescriptionQuanity: String!){
        addPrescription(name: $name, frequency: $frequency, time: $time, prescriptionQuanity: $prescriptionQuanity){
            id
            name
            frequency
            time
            prescriptionQuanity
        }
    }
`
const DELETE_PRESCRIPTION = gql`
    mutation deletePrescription($id: ID!) {
        deletePrescription(id: $id) {
            id
            name
            frequency
            time
            prescriptionQuanity
        }
    }
`;
//Update Prescription
const UPDATE_PRESCRIPTION = gql`
  mutation UpdatePrescription(
    $id: ID!
    $name: String!
    $frequency: String!
    $time: String!
    $prescriptionQuanity: String!
  ) {
    UpdatePrescription(
      id: $id
      name: $name
      frequency: $frequency
      time: $time
      prescriptionQuanity: $prescriptionQuanity
    ) {
      id
      name
      frequency
      time
      prescriptionQuanity
    }
  }
`;

export { ADD_PRESCRIPTION, DELETE_PRESCRIPTION, UPDATE_PRESCRIPTION }