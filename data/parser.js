// const karagiriRes = require('./karagiriData.json');

// console.log(karagiriRes[23].specification['Lehenga Fabric']);
// /*
// "description": []
// */

const fs = require('fs');
const misc = require('./misc.json');

fs.writeFile('./misc.json', JSON.stringify(misc, null, " "), (err) => {
    if (err) {
        console.log(err);
    }
})