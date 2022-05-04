const formatPhone = require('./../src/cophone')

/**
 * 1. Take 300000000 return 300 000 000
 *
 * 2. Take 6020000000 return 602 000 00 00
 *         6020000000#123 return 602 000 00 00 Ext. 123
 *         6020000000+4 return 602 000 00 00 Op. 4
 *
 * 3. Take 018000000000 return 01 8000 000 000
 */

test('it should return null when the phone is wrong', () => {
    // assign
    const wrongPhone = ''
    // act
    formated = formatPhone(wrongPhone)
    // assert
    expect(formated).toBeNull()
})
