import { useState } from "react";
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_PRESCRIPTION } from "../mutations/prescriptionMutations";
import { GET_PRESCRIPTIONS } from "../queries/prescriptionQueries";

export default function AddPrescriptionModal() {

    const [ name, setName ] = useState('');
    const [ frequency, setFrequency ] = useState('');
    const [ time, setTime ] = useState('');
    const [ prescriptionQuanity, setPrescriptionQuanity ] = useState('');

    const [addPrescription] = useMutation(ADD_PRESCRIPTION, {
        variables: {name, frequency, time, prescriptionQuanity},
        update(cache, { data: {addPrescription} }){
            const {prescriptions} = cache.readQuery({query: GET_PRESCRIPTIONS})
            cache.writeQuery({
                query: GET_PRESCRIPTIONS,
                data: { prescriptions: [...prescriptions, addPrescription]}
            })
        }
    })

    const onSubmit = (e) => {
        e.preventDefault()

        if(name === '' || frequency === '' || time === '' || prescriptionQuanity === ''){
            return alert('Please fill in all fields')
        }

        addPrescription(name, frequency, time, prescriptionQuanity)

        setName('')
        setFrequency('')
        setTime('')
        setPrescriptionQuanity('')
    }

  return (
    <>
    <button 
        type="button" 
        className="btn btn-secondary" 
        data-bs-toggle="modal" 
        data-bs-target="#addPrescriptionModal"
    >
        <div className="d-flex align-items-center">
            <FaPrescriptionBottleAlt className="icon" />
            <div>Add Prescription</div>
        </div>
    </button>

    <div 
        className="modal fade" 
        id="addPrescriptionModal" 
        aria-labelledby="addPrescriptionModalLabel" 
        aria-hidden="true"
    >
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 
                className="modal-title" 
                id="addPrescriptionModalLabel"
            >
                Add Prescription
            </h5>
            <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
            >

            </button>
        </div>
        <div className="modal-body">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={ (e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Frequency</label>
                    <input type="text" className="form-control" id="frequency" value={frequency} onChange={ (e) => setFrequency(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Time</label>
                    <input type="text" className="form-control" id="time" value={time} onChange={ (e) => setTime(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pills Remaining</label>
                    <input type="text" className="form-control" id="prescriptionQuanity" value={prescriptionQuanity} onChange={ (e) => setPrescriptionQuanity(e.target.value)} />
                </div>
                <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">
                    Submit
                </button>

            </form>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
