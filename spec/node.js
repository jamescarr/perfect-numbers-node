
require.paths.unshift('spec', '/home/jamescarr/.rvm/rubies/ruby-head/lib/ruby/gems/1.9.1/gems/jspec-4.3.2/lib', 'lib')
require('jspec')
perfectNumber = require(__dirname + '/../lib/perfect-number')

JSpec
  .exec(__dirname + '/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'fixtures', failuresOnly: true })
  .report()
