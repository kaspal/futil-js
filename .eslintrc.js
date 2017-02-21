module.exports = {
    'extends': 'standard',
    plugins: [
        'mocha'
    ],
    env: {
        mocha: true
    },
    rules: {
        // Mocha plugin
        'mocha/no-exclusive-tests':      'error',
        'mocha/no-skipped-tests':        'error',
        'mocha/handle-done-callback':    'error',
        'mocha/no-global-tests':         'error',
        'mocha/valid-suite-description': 'error',
        'mocha/no-sibling-hooks':        'error',

        // These two rules are not yet available in codacy
        // 'mocha/no-return-and-callback':  'error',
        // 'mocha/no-identical-title':      'warn',

        // Because of should.be.true and so on
        indent:                          ['error', 4]
    }
};