// const karagiriRes = require('./karagiriData.json');

// console.log(karagiriRes[23].specification['Lehenga Fabric']);
// /*
// "description": []
// */

const fs = require('fs');
const misc = require('./karagiriData.json');

fs.writeFile('./sample.json', JSON.stringify(misc.slice(0, 3), null, " "), (err) => {
    if (err) {
        console.log(err);
    }
})

