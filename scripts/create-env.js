fs = require('fs')
fs.writeFileSync('./.env', `BACKEND_URL=${process.env.BACKEND_URL}\n`)
console.log('Test:' + process.env.BACKEND_URL)