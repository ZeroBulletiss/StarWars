const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema ({
    nome: String,
    idade: Number,
    rg: Number,
    cpf: Number,    
    email: String,
})

module.exports = mongoose.model('Form', FormSchema)