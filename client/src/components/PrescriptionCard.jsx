export default function PrescriptionCard({prescription}) {
    return (
      <div className="col-md-6">
          <div className="card mb-3">
              <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{prescription.name}</h5>
  
                      <a className="btn btn-light" href={`/prescriptions/${prescription.id}`}>View</a>
  
  
                  </div>
                  <p className="small">
                      Remaining: <strong>{prescription.prescriptionQuanity}</strong>
                  </p>
              </div>
          </div>
      </div>
    )
  }
  