const mongoose = require('mongoose')

const PrescriptionSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    frequency: {
        type: String,
    },
    time: {
        type: String,
    },
    prescriptionQuanity: {
        type: String,
    }
})

module.exports = mongoose.model('Prescription', PrescriptionSchema)