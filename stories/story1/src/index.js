var readjson = require('readjson');


readjson('../package.json', function(error, json) {
    if (error)
        console.error(error.message);
    else
        console.log([
            json.name, json.version
        ].join(' '));
});

console.log("story1");
