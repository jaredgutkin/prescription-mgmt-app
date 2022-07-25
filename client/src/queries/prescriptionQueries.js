import {gql} from '@apollo/client'
const GET_PRESCRIPTIONS = gql`
    query getPrescriptions {
       prescriptions {
            id
            name
            frequency
            time
            prescriptionQuanity
          }
    }
`;

const GET_PRESCRIPTION = gql`
    query getPrescription($id: ID!) {
       prescription(id: $id) {
            id
            name
            frequency
            time
            prescriptionQuanity
          }
    }
`;

export { GET_PRESCRIPTION, GET_PRESCRIPTIONS }