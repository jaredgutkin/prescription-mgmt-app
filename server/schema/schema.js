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
        prescriptionQuanity: { type: GraphQLInt}

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