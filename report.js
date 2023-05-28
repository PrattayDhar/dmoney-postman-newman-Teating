const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27409332-b91fed09-ed9c-42bc-9b47-a6eba838c916?access_key=PMAT-01H1J51HRP3Z7TV0D3ZASV4BHP',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});