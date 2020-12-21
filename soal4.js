const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // convert ke json
  // .then(response => console.log(response)) // menampilkan keseluruhan data
  .then(response => {
    let index = 10
    for(let i=0; i<index; i++){
      const nama = response[i]["name"]
      console.log(`Hallo, ${nama}`)
    }
  })
  .catch(err => console.log(err.message))

// link panduan npm install node-fetch https://www.npmjs.com/package/node-fetch