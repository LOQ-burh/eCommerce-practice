'use strict'

const AccessService = require("../services/access.service")
const { OK, CREATED, SuccessResponse } = require("../core/success.response")

class AccessController {

  login = async (req, res, next) => {
    new SuccessResponse({
      metadata: await AccessService.login( req.body )
    }).send(res)
  }

  signUp = async (req, res, next) => {
    // 200 OK
    // 201 CREATED
    new CREATED({
      message: 'Register OK!',
      metadata: await AccessService.signUp(req.body),
      option: 'abc'
    }).send(res)
    // return res.status(201).json(await AccessService.signUp(req.body))
  }

  logout = async (req, res, next) => {
    new SuccessResponse({
      message: 'Logout success!',
      metadata: await AccessService.logout( req.keyStore )
    }).send(res)
  }
}
module.exports = new AccessController()
