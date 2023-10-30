const fs = require('fs')
const os = require('os')

const result = 'XD'
// {
//   name: 'test',
//   value: 'test'
// }

const filePath = process.env.GITHUB_OUTPUT
const delimiter = `ghadelimiter`
fs.appendFileSync(filePath, `result<<${delimiter}${os.EOL}${JSON.stringify(result)}${os.EOL}${delimiter}${os.EOL}`, {
  encoding: 'utf8'
})