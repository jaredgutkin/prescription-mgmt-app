//mongoose models
const Prescription = require('../models/Prescription')

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLInt, 
} = require('graphql')

//Prescription Type
const PrescriptionType = new GraphQLObjectType({
    name: 'Prescription',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        frequency: { type: GraphQLString },
        time: { type: GraphQLString},
        prescriptionQuanity: { type: GraphQLString}

    }),
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        prescriptions: {
            type: new GraphQLList(PrescriptionType),
            resolve(parent, args) {
                return Prescription.find();
            }
        },
        prescription: {
            type: PrescriptionType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                return Prescription.findById(args.id)
            }
        }
    }
})

//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //Add Prescription
        addPrescription: {
            type: PrescriptionType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString)},
                frequency: { type: GraphQLNonNull(GraphQLString) },
                time: { type: GraphQLNonNull(GraphQLString)},
                prescriptionQuanity: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                const prescription = new Prescription({
                    name: args.name,
                    frequency: args.frequency,
                    time: args.time,
                    prescriptionQuanity: args.prescriptionQuanity,
                })

                return prescription.save()
            }
        },
        //Delete Prescription
        deletePrescription: {
            type: PrescriptionType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                return Prescription.findByIdAndRemove(args.id)
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})