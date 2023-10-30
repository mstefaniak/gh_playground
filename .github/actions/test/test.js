const fs = require('fs')
const os = require('os')

const result = {
  name: 'test',
  value: 'test'
}

const filePath = process.env.GITHUB_OUTPUT
const delimiter = `ghadelimiter`
fs.appendFileSync(filePath, `result<<${delimiter}${JSON.stringify(result)}${delimiter}${os.EOL}`, {
  encoding: 'utf8'
})