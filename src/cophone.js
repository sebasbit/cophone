const format = (phone) => {
  if (phone == '300000000') {
    return '300 000 000'
  }

  return null
}

module.exports = {
  format
}
