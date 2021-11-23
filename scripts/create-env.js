fs = require('fs')
fs.writeFileSync('./.env', `BACKEND_URL=${process.env.BACKEND_URL}\n`)
console.log(process.env.BACKEND_URL)