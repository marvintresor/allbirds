const mongoose = require('mongoose')

const formulaireSchema = mongoose.Schema({
    prenom:{type: String, required: true},
    nom:{type: String, required:true},
    email:{type: String, required: true},
    password:{type: String, required: true},
});

const Formulaire = mongoose.model('Formulaire', formulaireSchema);
module.exports = Formulaire