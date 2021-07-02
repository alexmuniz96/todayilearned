function getFlag(str) {
  const index = process.argv.indexOf(str) + 1
  return process.argv[index]
}

module.exports = getFlag;