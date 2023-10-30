const fs = require('fs')
const os = require('os')

const result = {
  name: 'test',
  value: 'test'
}

const filePath = process.env.GITHUB_OUTPUT
fs.appendFileSync(filePath, `result<<${JSON.stringify(result)}${os.EOL}`, {
  encoding: 'utf8'
})