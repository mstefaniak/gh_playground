const fs = require('fs')
const os = require('os')

const result = 'XD'
// {
//   name: 'test',
//   value: 'test'
// }

const filePath = process.env.GITHUB_OUTPUT
const delimiter = `ghadelimiter`
const encoded = `result<<${delimiter}${os.EOL}${JSON.stringify(result)}${os.EOL}${delimiter}${os.EOL}`
console.log('filePath', filePath)
console.log(encoded)
fs.appendFileSync(filePath, encoded, {
  encoding: 'utf8'
})