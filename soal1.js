const cekHariKerja = (day) => {
  // const days = day.charAt(0).toUpperCase() + day.substr(1).toLowerCase()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['Senin','Selasa','Rabu','Kamis','Jumat']
      let cek = dataDay.find( (item) => {
        return item === day
      })
      // Pengondisian
      if(cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

// (then catch)
// cekHariKerja("Selasa").then((respon) => {
//   console.log(respon)
//   // if(typeof(respon) === 'string'){
//   //   console.log(respon)
//   // } else {
//   //   console.log('data inputan wajib string')t
//   // }
// }).catch((error) => {
//   console.log(error.message)
// })

// (then catch)
const inputHari = (isiHari) => {
  // cekHariKerja( isiHari.charAt(0).toUpperCase() + isiHari.substr(1).toLowerCase() )
  cekHariKerja(isiHari)
  .then((response) => {
    console.log(`Hari ${response}, semangat kerja!`)
    // if(typeof(response) === 'string'){
    //   console.log(`Hari ${response}, semangat kerja!`)
    // } else {
    //   console.log('data inputan wajib string')
    // }
  }).catch((error) => {
    console.log(error.message)
  })
}
// inputHari('Selasa')
inputHari('Sabtu')

// Kesimpulan menggunakan then catch pada promise akan menampilkan value promisenya
// apabila (promise) terpenuhi akan memanggil callback resolve yang disebut dengan response
// apabila tidak terpenuhi akan memanggil callback reject dapat disebut dengan error
// Dengan cara ini kita hanya dapat menampilkan value dari promise nya 
// tidak dapat penambahan printah atau manipulasi data didalam than catch nya.




// (try catch)
// const inputHari = async(isiHari) => {
//   try {
//     const result = await cekHariKerja( isiHari.charAt(0).toUpperCase() + isiHari.substr(1).toLowerCase() )
//     console.log(result)
    
//     // if (typeof(isiHari) === 'string') {
//     //   const result = await cekHariKerja( isiHari.charAt(0).toUpperCase() + isiHari.substr(1).toLowerCase() )
//     //   console.log(result)
//     // } else {
//     //   console.log('data inputan wajib string')
//     // }
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// inputHari("Senin")
// inputHari('senin')
// inputHari("Sabtu")
// inputHari(false)


// Kesimpulan menggunakan try catch pada promise akan menampilkan value promisenya
// dengan membuat async pada function dan await function callbacknya
// apabila (promise) terpenuhi akan memanggil callback resolve 
// apabila tidak terpenuhi akan memanggil callback reject
// Dengan cara ini kita dapat melalukan perintah atau manipulasi data didalam try catchnya
