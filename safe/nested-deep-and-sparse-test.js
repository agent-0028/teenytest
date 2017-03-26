var helper = require('./support/helper')
var assert = require('core-assert')

module.exports = function (cb) {
  helper.run('safe/fixtures/nested-sparse-test.js', function (er, result, log) {
    assert.equal(result, false)
    log.assert(
      'TAP version 13',
      '1..2',
      'ok 1 - "a b c d e woot" - test #1 in `safe/fixtures/nested-sparse-test.js`',
      'not ok 2 - "a b c d doh" - test #2 in `safe/fixtures/nested-sparse-test.js`',
      '  ---',
      '  message: Doh',
      /stacktrace: Error: Doh/
    )
    cb(er)
  })
}
