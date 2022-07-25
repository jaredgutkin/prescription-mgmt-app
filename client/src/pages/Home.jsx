import React from 'react'
import AddPrescriptionModal from '../components/AddPrescriptionModal'
import Prescriptions from '../components/Prescriptions'

export default function Home() {
  return (
    <>
        <div className="d-flex gap-3 mb-4">
            <AddPrescriptionModal />
        </div>
        <Prescriptions />
    </>
  )
}

