'use strict'

const express = require('express')
const router = express.Router()

const accessController = require('../../controllers/access.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')
// Sign-up
router.post('/shop/signup', asyncHandler(accessController.signUp))
// Login
router.post('/shop/login', asyncHandler(accessController.login))
// Authentication
router.use(authentication)
// ==============
// Logout
router.post('/shop/logout', asyncHandler(accessController.logout))
// hanlder refreshToken
router.post('/shop/hanlderRefreshToken', asyncHandler(accessController.handlerRefreshToken))

module.exports = router
