'use strict'

const { Query, Types, skipMiddlewareFunction } = require('mongoose')
const { product,  electronic, clothing, furniture } = require('../product.model')

const findAllDraftForShop = async ({ query, limit, skip }) => {
  return await queryProduct({ query, limit, skip })
}

const findAllPublishForShop = async ({ query, limit, skip }) => {
  return await queryProduct({ query, limit, skip })
}

const publicProductByShop = async ({ product_shop, product_id }) => {
  const foundShop = await product.findOne({
    product_shop: new Types.ObjectId(product_shop),
    _id: new Types.ObjectId(product_id)
  })

  if(!foundShop) return null

  foundShop.isDraft = false
  foundShop.isPublished = true

  const { modifiedCount } = await foundShop.updateOne(foundShop)
  return modifiedCount
}

const unpublicProductByShop = async ({ product_shop, product_id }) => {
  const foundShop = await product.findOne({
    product_shop: new Types.ObjectId(product_shop),
    _id: new Types.ObjectId(product_id)
  })

  if(!foundShop) return null

  foundShop.isDraft = true
  foundShop.isPublished = false

  const { modifiedCount } = await foundShop.updateOne(foundShop)
  return modifiedCount
}

const queryProduct = async ({ query, limit, skip }) => {
  return await product.find(query).populate('product_shop', 'name email -_id')
  .sort({ updateAt: -1 })
  .skip(skip)
  .limit(limit)
  .lean()
  .exec()
}

module.exports = {
  findAllDraftForShop,
  publicProductByShop,
  findAllPublishForShop,
  unpublicProductByShop
}
