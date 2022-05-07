const format = (phone) => {
  if (phone === '') {
    return null
  }

  if (!phone.match(/^(57)?3\d{8}$/)) {
    return null
  }

  // 57 300 000 000
  // ^^ ^^^ ^^^ ^^^
  // 01 234 567 890
  if (phone.startsWith('57')) {
    return '+' + phone.substring(0, 2) + ' ' + phone.substring(2, 5) + ' ' + phone.substring(5, 8) + ' ' + phone.substring(8)
  }

  // 300 000 000
  // ^^^ ^^^ ^^^
  // 012 345 678
  return phone.substring(0, 3) + ' ' + phone.substring(3, 6) + ' ' + phone.substring(6)
}

module.exports = {
  format
}
