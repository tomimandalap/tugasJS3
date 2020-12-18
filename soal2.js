const getmonth = (callback) => {
  setTimeout(() => {
    let error = true
    let month = [
      'January', 'February', 'March', 'April',
      'May', 'Juni', 'July', 'August', 
      'September', 'October', 'November', 'Desember'
    ]
    if(!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found',[]))
    }
  }, 500)
}

getmonth( (value, array) => {

  // console.log(value)
  // console.log(array)

  if (value == null) {
    const tampilkanIsi = array.map((element,index)=> `index ke ${index} Bulan ${element}`)
    console.log(tampilkanIsi)
  } else {
    console.log(value.message)
  }
})