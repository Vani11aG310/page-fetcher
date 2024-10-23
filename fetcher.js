const needle = require('needle');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

needle.get(url, (error, respones, body) => {
  setTimeout(() => {
    fs.writeFile(path, body, (err) => {
      if (err) {
        throw err;
      }  
    });
    setTimeout(() => {
      fs.stat(path, (err, stats) => {
        if (err) throw err;
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
      })
    }, 2000)
  }, 1000);
  
})