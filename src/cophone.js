const format = (phone) => {
  if (phone === '') {
    return null
  }

  if (!phone.match(/^3\d{8}$/)) {
    return null
  }

  // 300 000 000
  // ^^^ ^^^ ^^^
  // 012 345 678
  return phone.substring(0, 3) + ' ' + phone.substring(3, 6) + ' ' + phone.substring(6)
}

module.exports = {
  format
}
