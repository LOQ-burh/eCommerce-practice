'use strict'

const express = require('express')
const router = express.Router()

const productController = require('../../controllers/product.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authenticationV2  } = require('../../auth/authUtils')

// Authentication
router.use(authenticationV2)
// ==============
router.post('', asyncHandler(productController.createProduct))
router.post('/publish/:id', asyncHandler(productController.publicProductByShop))
// GET
router.get('/drafts/all', asyncHandler(productController.getAllDraftsForShop))
router.get('/publish/all', asyncHandler(productController.getAllPublishForShop))

module.exports = router
