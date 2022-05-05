const cophone = require('./../src/cophone')

/**
 * 1. Take 300000000 return 300 000 000
 *
 * 2. Take 6020000000 return 602 000 00 00
 *         6020000000#123 return 602 000 00 00 Ext. 123
 *         6020000000+4 return 602 000 00 00 Op. 4
 *
 * 3. Take 018000000000 return 01 8000 000 000
 */

test('it should return null when the phone is empty', () => {
  // assign
  const wrongPhone = ''
  // act
  const formated = cophone.format(wrongPhone)
  // assert
  expect(formated).toBeNull()
})

test('it should return null when the phone contains non-numeric characters', () => {
  const phone = '3!$%&/()='
  //             300000000
  const formated = cophone.format(phone)
  expect(formated).toBeNull()
})

test('it should return a formatted cell phone when a good one is provided', () => {
    expect(cophone.format('300000000')).toBe('300 000 000')
    expect(cophone.format('300000001')).toBe('300 000 001')
})

test('it should return null when the cell phones length is invalid', () => {
  const lessLength = '30000000'
  expect(cophone.format(lessLength)).toBeNull()

  const greaterLength = '3000000001'
  expect(cophone.format(greaterLength)).toBeNull()
})

test('it should return null when the cell phones does not start with 3', () => {
  for (var i = 1; i <= 9; i++) {
    if (i === 3) {
        continue
    }

    let phone = `${i}00000000`
    expect(cophone.format(phone)).toBeNull()
  }
})
