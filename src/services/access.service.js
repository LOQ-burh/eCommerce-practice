'use strict'

const bcrypt = require('bcrypt')
const crypto = require('node:crypto');
const shopModel = require('../models/shop.model')
const KeyTokenService = require('./keytoken.service');
const { createTokenPair } = require('../auth/authUtils')
const { getInfoData } = require('../utils/')

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {

    static signUp = async ({ name, email, password }) => {
        try {
            //Check email exists?
            const modelShop = await shopModel.findOne({ email }).lean()
            if (modelShop) {
                return {
                    code: 'xxx',
                    message: 'Shop already registed!'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles: [RoleShop.SHOP]
            })

            if (newShop) {
                // created private key, public key
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    // The standard secure default length for RSA keys is 2048 bits
                    // The different option secure length for RSA keys is 4096 bits
                    modulusLength: 4096,
                    // 'pkcs1': Public key CryptoGraphy Standards 1
                    // 'pem'  : Privacy Enhanced Mail
                    publicKeyEncoding: {
                        type: "pkcs1",
                        format: "pem"
                    },
                    privateKeyEncoding: {
                        type: "pkcs1",
                        format: "pem"
                    }
                })

                // const privateKey = crypto.getRandomValues(64).toString('hex')
                // const publicKey  = crypto.getRandomValues(64).toString('hex')

                console.log({ privateKey, publicKey })

                // console.log(
                //     publicKey.export({
                //         type: "pkcs1",
                //         format: "pem",
                //     }),

                //     privateKey.export({
                //         type: "pkcs1",
                //         format: "pem",
                //     })
                // )

                const publicKeyString = await KeyTokenService.createKeyToken({
                    userId: newShop._id,
                    publicKey
                })

                if(!publicKeyString){
                    return {
                        code: 'xxx',
                        message: 'publicKeyString error!'
                    }
                }
                console.log(`publicKeyString::`, publicKeyString)

                const publicKeyObject = crypto.createPublicKey( publicKeyString )
                console.log(`publicKeyObject::`, publicKeyObject)

                //created tokens pair                                       
                const tokens = await createTokenPair({userId: newShop._id, email}, publicKeyObject, privateKey)
                console.log(`created tokens success!::`, tokens)

                //====================Level 0
                // return {
                //     code: 201,
                //     metadata: {
                //         shop: {
                //             _id: newShop._id,
                //             name: newShop.name,
                //             email: newShop.email
                //         },
                //         tokens
                //     }
                // }

                //====================Level 2
                //using lodash
                return {
                    code: 201,
                    metadata: {
                        shop: getInfoData({ fields: ['_id', 'name', 'email'], object: newShop }),
                        tokens
                    }
                }
            }
            return {
                code: 200,
                metadata: null
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService