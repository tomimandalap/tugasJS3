// Soal 3 A
// const cekRakBuah = (buah) => {
//   const fruits = buah.charAt(0).toUpperCase() + buah.substr(1).toLowerCase()
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrBuah = [
//         'Apel', 'Belimbing', 'Cerry', 
//         'Duku', 'Jeruk', 'Kiwi', 
//         'Mangga', 'Rambutan', 'Semangka'
//       ]
//       let cekData = arrBuah.find( (element) => {
//         return element === fruits
//       })
//       if(cekData) {
//         resolve(cekData)
//       } else {
//         reject(new Error(`Oops buah saat ini tidak tersedia!`))
//       }
//     }, 3000)
//   })
// }

// (then catch)
// cekRakBuah("anggur")
// .then((respon) => {
//   console.log(`Buah ${respon} tersedia untuk mu.`)
// }).catch((error) => {
//   console.log(error.message)
// })

// Soal 3 B
const cekMerkHp = (kataKunci) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const brandHp = [
        'Samsung', 'Nokia', 'Iphone', 
        'Oppo', 'Vivo', 'Realme'
      ]
      let cariData = brandHp.find( (element) => {
        return element === kataKunci
      })
      if(cariData) {
        resolve(cariData)
      } else {
        reject(new Error("Merk hp yang kamu cari tidak tersedia."))
      }
    }, 3000)
  })
}

// try catch
const search = async(isiMerkHp) => {
  try {
    if (typeof(isiMerkHp) === 'string') {
      const result = await cekMerkHp( isiMerkHp.charAt(0).toUpperCase() + isiMerkHp.substr(1).toLowerCase() )
      console.log(result)
    } else {
      console.log('Keyword wajib string')
    }
  } catch (error) {
    console.log(error.message)
  }
}

search("SAMSUNG")
search("Mito")
search(true)