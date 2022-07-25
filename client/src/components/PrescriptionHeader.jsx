import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PRESCRIPTIONS } from "../queries/prescriptionQueries";
import PrescriptionCard from "./PrescriptionCard";

export default function PrescriptionHeader() {
    const { loading, error, data } = useQuery(GET_PRESCRIPTIONS)

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

  return (
    <>
        {data.prescriptions.length > 0 ? (
            <div className='row mt-4'>
                {data.prescriptions.map((prescription) => (
                    <PrescriptionCard key={prescription.id} prescription={prescription} />
                ))}
            </div>
        ) : (
        <p>No Prescription</p>
        )}
    </>
  )
}

