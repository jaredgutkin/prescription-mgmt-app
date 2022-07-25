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
        type: Number,
    }
})

module.exports = mongoose.model('Prescription', PrescriptionSchema)