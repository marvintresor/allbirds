const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Formulaire = require('../models/formulaire');

exports.formulaire =(req, res, next) =>{
    bcrypt.hash(req.body.nom,)
    .then(hash =>{
        const formulaire = new Formulaire({
            prenom: req.body.prenom,
            nom: req.body.nom,
            email: req.body.email,
            password:req.body.password,
        });
        formulaire.save()
            .then(() =>res.status(201).json({message: 'utilisateur trouvé !'}))
            .catch(error =>res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};