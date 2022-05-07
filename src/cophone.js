const format = (phone) => {
  if (phone === '') {
    return null
  }

  if (!phone.match(/^(57)?3\d{8}$/)) {
    return null
  }

  // 57 300 000 000
  // ^^ ^^^ ^^^ ^^^
  // ** *12 123 123
  return phone.replace(/(57)?(3\d{2})(\d{3})(\d{3})/, '+$1 $2 $3 $4').replace('+ ', '')
}

module.exports = {
  format
}
