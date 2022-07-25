import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PRESCRIPTIONS} from '../queries/prescriptionQueries';
import PrescriptionRow from './PrescriptionRow'

export default function Prescriptions() {
    const { loading, error, data } = useQuery(GET_PRESCRIPTIONS)

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>
  return (
    <>
    {!loading && !error && (
        <table className='table table-hover mt-3'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Frequency</th>
                    <th>Time</th>
                    <th>Prescription Quanity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.prescriptions.map(prescription => (
                    <PrescriptionRow key={prescription.id} prescription={prescription} />
                ))}
            </tbody>
        </table>
    )}
    </>
  )
}
