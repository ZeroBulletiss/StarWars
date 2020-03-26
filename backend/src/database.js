const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://zerobala:zerobala@cluster0-pkdsr.mongodb.net/week10?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true },
 (error) => error ? console.log('connection to the database have failed') : console.log('connection success'))
