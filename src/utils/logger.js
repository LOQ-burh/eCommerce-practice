const winston = require('winston')

// luu vao mot file de de quan lys : combined.log

const logger = winston.createLogger({
  transports: [
     new winston.transports.Console(),
     new winston.transports.File({filename: 'combined.log'})
  ]
})

// quan ly logging theo size
const maxsizeTransport = new winston.transports.File({
  level: 'info',
  format: winston.format.printf(info => info.message),
  filename: ('testMaxsize.log'), //đường đẫn tạo file
  maxsize: 5242880, // 5MB
})
