const cekHariKerja = (day) => {
  // const days = day.charAt(0).toUpperCase() + day.substr(1).toLowerCase()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['Senin','Selasa','Rabu','Kamis','Jumat']
      let cek = dataDay.find( (item) => {
        return item === day
      })
      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

// promise (then catch)
// cekHariKerja("Selasa").then((respon) => {
//   console.log(respon)
//   // if(typeof(respon) === 'string'){
//   //   console.log(respon)
//   // } else {
//   //   console.log('data inputan wajib string')
//   // }
// }).catch((error) => {
//   console.log(error.message)
// })

// const promised = (isiHari) => {
//   cekHariKerja( isiHari.charAt(0).toUpperCase() + isiHari.substr(1).toLowerCase() ).then((respon) => {
//     console.log(respon)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }
// promised('selasa')

// try catch
const inputHari = async(isiHari) => {
  try {
    const result = await cekHariKerja( isiHari.charAt(0).toUpperCase() + isiHari.substr(1).toLowerCase() )
    console.log(result)
    
    // if (typeof(isiHari) === 'string') {
    //   const result = await cekHariKerja( isiHari.charAt(0).toUpperCase() + isiHari.substr(1).toLowerCase() )
    //   console.log(result)
    // } else {
    //   console.log('data inputan wajib string')
    // }
  } catch (error) {
    console.log(error.message)
  }
}

inputHari("Senin")
inputHari('senin')
inputHari("Sabtu")
// inputHari(false)
