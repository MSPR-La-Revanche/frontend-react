module.exports = {
    collectCoverage: true,
    moduleFileExtensions: ['ts', 'js', 'node', 'jsx', 'json'],
    transform: {
        "^.+\\.js?$": "babel-jest"
    },
    reporters: [
        'default',
        [ 'jest-junit', {
            outputDirectory: '.test',
                outputName: 'junit.xml',
            }
        ]
    ]
};
