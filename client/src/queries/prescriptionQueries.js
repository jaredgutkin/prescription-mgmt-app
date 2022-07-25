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
`

export { GET_PRESCRIPTIONS }