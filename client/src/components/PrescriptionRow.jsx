import {FaTrash} from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { GET_PRESCRIPTIONS } from '../queries/prescriptionQueries'
import { DELETE_PRESCRIPTION } from '../mutations/prescriptionMutations'

export default function PrescriptionRow({ prescription }) {
  const [deletePrescription ] = useMutation(DELETE_PRESCRIPTION, {
    variables: { id: prescription.id },
    refetchQueries: [{query: GET_PRESCRIPTIONS}]

  })
  return (
    <tr>
        <td>{prescription.name}</td>
        <td>{prescription.frequency}</td>
        <td>{prescription.time}</td>
        <td>{prescription.prescriptionQuanity}</td>
        <td>
            <button className="btn btn-danger btn-sm"
            onClick={deletePrescription}>
                <FaTrash/>
            </button>
        </td>
    </tr>
  )
}