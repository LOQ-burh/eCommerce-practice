'use strict'

const ProductService = require("../services/product.service")
const ProductServiceV2 = require("../services/product.service.xxx")
const { SuccessResponse } = require('../core/success.response')

class ProductController {
  createProduct = async ( req, res, next ) => {
    // new SuccessResponse({
    //   message: 'Create new Product success!',
    //   metadata: await ProductService.createProduct(req.body.product_type, {
    //     ...req.body,
    //     product_shop: req.user.userId
    //   })
    // }).send(res)

    new SuccessResponse({
      message: 'Create new Product success!',
      metadata: await ProductServiceV2.createProduct(req.body.product_type, {
        ...req.body,
        product_shop: req.user.userId
      })
    }).send(res)
  }

  publicProductByShop = async ( req, res, next ) => {

    new SuccessResponse({
      message: 'Publish Product success!',
      metadata: await ProductServiceV2.publicProductByShop({
        product_id: req.params.id,
        product_shop: req.user.userId
      })
    }).send(res)
  }

  unpublicProductByShop = async ( req, res, next ) => {

    new SuccessResponse({
      message: 'unPublish Product success!',
      metadata: await ProductServiceV2.unpublicProductByShop({
        product_id: req.params.id,
        product_shop: req.user.userId
      })
    }).send(res)
  }

  // GET
  /**
   * @desc Get all drafts  for shop
   * @param {Number} limit
   * @param {Number} skip
   * @return {JSON}
   */
  getAllDraftsForShop = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get list drafts success!',
      metadata: await ProductServiceV2.findAllDraftForShop({
        product_shop: req.user.userId
      })
    }).send(res)
  }

  getAllPublishForShop = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get list publish success!',
      metadata: await ProductServiceV2.findAllPublishForShop({
        product_shop: req.user.userId
      })
    }).send(res)
  }
}

module.exports = new ProductController()
