const  mangoose = require('mangoose')

const dataSchema = new mongoose.Schema({
name:{
type: string,
required: true,
},
gmail: {
type: string,
required: true,
},
country: {
    type: string,
    required: true,
    },
})

module.exports =mongoose.model('subscriber',dataSchema)