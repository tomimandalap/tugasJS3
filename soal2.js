const getmonth = (callback) => {
  setTimeout(() => {
    let error = false
    let month = [
      'January', 'February', 'March', 'April',
      'May', 'Juni', 'July', 'August', 
      'September', 'October', 'November', 'Desember'
    ]
    // pengkondisian
    if(!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found',[]))
    }
  }, 4000)
}

getmonth( (value, array) => {
  // console.log(value)
  // console.log(array)

  if (!value) {
    array.map((element)=> console.log(element))
  } else {
    console.log(value.message)
  }
})