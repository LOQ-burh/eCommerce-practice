const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const { default : helmet } = require('helmet')
const app = express()   

//init middlewares
app.use(morgan("dev"))
// morgan("comnined")
// morgan("common")
// morgan("short")
// morgan("tiny")
app.use(helmet())
app.use(compression())
//init db   
require('./databases/init.mongodb.lv1')

// init routes
app.get('/', ( req, res, next) => {
    return res.status(200).json({
        message: 'Welcome tipsJS'
    })
})
//hanlding errors

module.exports = app