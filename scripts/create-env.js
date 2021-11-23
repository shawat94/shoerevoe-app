fs = require('fs')
fs.writeFileSync('./.env', `BACKEND_URL=${process.env.REACT_APP_BACKEND_URL}\n`)
