const express = require('express')
const router = express.Router() 

router.get('/:id', (req,res,next) => {
    res.status(200).json({
        message: 'Hello, I am All contacts get route'
    })
})


router.post('/:id', (req,res,next) => {   //middle ware function
    
    const name = req.body.name
    const email = req.body.email

    res.status(201).json({
        message: 'Hello, I am All contacts post route',
        name,
        email
    })
})

router.delete('/:id', (req,res,next) => {
    res.json({
        message: 'Hello, I am All contacts delete route'
    })
})

module.exports = router