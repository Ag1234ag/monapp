const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.SignUp = async (req,res)=>{
    // postman => base req
    // base => post res
    const { Email,Password} = req.body
    
    const salt = 10
    try {
        // Verifier si l'adresse du nouvel utilisateur existe
        const userIsFound = await User.findOne({Email})
        if(userIsFound){return res.status(400).send({errors : [{msg : 'L utilisateur existe déja !'}]})}
        //Tantqu'il s'agit d'un nouvel utilisateur nous allons l'ajouter
        const userToAdd = new User(req.body)
        //Hasher le mot de passe 
        const hash = bcrypt.hashSync(Password, salt);
        userToAdd.Password = hash 
        //Génération du token
        const payload = { id: userToAdd._id }
        const token = jwt.sign(payload, process.env.SecretKEY);
        await userToAdd.save()
        res.status(200).send({msg:'L utilisateur enregistrer avec succé !',userToAdd,token})


    } catch (error) {
        //Avoir le meme format d'erreur / pour pouvoir parcourir un tableau d'erreur 
        res.status(500).send({errors : [{msg : 'On ne peut pas enregistrer ! '}]})
    }
}