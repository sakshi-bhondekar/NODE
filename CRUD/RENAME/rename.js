//4. RENAME

const fs = require ('fs')
const path = require ('path')
fs.rename('dragon.js', 'orange2.js', (err) => {
       if (!err) console.log('Rename complete!');
     });