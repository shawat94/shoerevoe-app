fs = require('fs')
fs.writeFileSync('./.env', `BACKEND_URL=${process.env.REACT_APP_BACKEND_URL}\n`)
console.log(process.cwd())
console.log('Test:' + process.env.REACT_APP_BACKEND_URL)
console.log(fs.readFileSync("./.env", "utf8"))