import { Link, useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_PRESCRIPTION } from '../queries/prescriptionQueries';

export default function Prescription() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PRESCRIPTION,
    {variables: {id}})

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

  return (
    <>
        {!loading && !error && (
            <div className="mx-auto w-75 card p-5">
                <Link to='/' className="btn btn-light btn-sm w-25 d-inline ms-auto">
                    Back
                </Link>
                
                <h1>{ data.prescription.name}</h1>

                <h5 className="mt-3">Pills Left</h5>
                <p className="lead">{data.prescription.prescriptionQuanity}</p>

            </div>
        )}
    </>
  )
}
