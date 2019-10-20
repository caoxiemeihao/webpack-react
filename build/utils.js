const path = require('path')

exports.resolve = function (...args) {
  return path.resolve(__dirname, ...args)
}
