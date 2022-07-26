import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PRESCRIPTION } from "../queries/prescriptionQueries";
import { UPDATE_PRESCRIPTION } from "../mutations/prescriptionMutations";

export default function EditPrescriptionForm({ prescription }) {
    const [ name, setName ] = useState(prescription.name);
    const [ frequency, setFrequency ] = useState(prescription.frequency);
    const [ time, setTime ] = useState(prescription.time);
    const [ prescriptionQuanity, setPrescriptionQuanity ] = useState(prescription.prescriptionQuanity);

    const [updatePrescription] = useMutation(UPDATE_PRESCRIPTION, {
        variables: { id: prescription.id, name, frequency, time, prescriptionQuanity},
        refetchQueries: [{ query: GET_PRESCRIPTION, variables: { id: prescription.id}}],
    });

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (!name || !frequency || !time || !prescriptionQuanity) {
          return alert("Please fill out all fields");
        }
    
        updatePrescription(name, time, frequency, prescriptionQuanity);
      };

    return (
        <div className="mt-5">
          <h3>Update Prescription Details</h3>
          <form onSubmit={onSubmit}>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Frequency</label>
              <textarea
                className="form-control"
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              </div>

              <div className="mb-3">
              <label className="form-label">Prescription Quanity</label>
              <input
                type="text"
                className="form-control"
                id="prescriptionQuanity"
                value={prescriptionQuanity}
                onChange={(e) => setPrescriptionQuanity(e.target.value)}
              />
            </div>
    
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    }
