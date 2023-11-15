const express = require('express')

// const Person = require('./models/Person')
const person = require('modules/person')
const router = express.Router();

router.get('/person', async (req,res) =>{
    const persons = await Person.find()
    res.status(200).json(persons);

})

router.post('/person', async(req,res)=>{
    const{first_name, last_name, age, gender} = req.body;

    const person = new Person({
        first_name,
        last_name,
        age,
        gender
    })
    await person.save()
    if(!person){
        res.status(500).json({error: "Error creating person"})
    }
    res.status(200).json({message: "Person cfreated successfully"})
})

module.exports = router;
