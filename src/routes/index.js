'use strict'

const express = require('express')
const router = express.Router()
const { apiKey, permission } = require('../auth/checkAuth')
//check apikey
router.use(apiKey)
//check permissions
router.use(permission('0000'))

router.use('/v1/api/product', require('./product'))
router.use('/v1/api', require('./access'))

// router.get('', ( req, res, next) => {
//     return res.status(200).json({
//         message: 'Welcome tipsJS'
//     })
// })

module.exports = router
