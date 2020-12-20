// asyncronus
// console.log("Hello World")
// setTimeout(() => {
//   console.log("Hai Tomi")
// },1000)
// console.log("Good Vibes")

// callback asyncronus
// const pertama = () => console.log("Satu")

// const kedua = (ketiga) => {
//   setTimeout(() => {
//     console.log("Dua")
//     // ketiga()
//   }, 1000)
// }

// const ketiga = () => {
//   console.log("Tiga")
// }

// pertama()
// kedua(ketiga)
// ketiga()

// promise
// let janji = new Promise((resolve, reject) => {
//   const status = false
//   if (status) {
//     resolve("Janji terpenuhi")
//   } else {
//     reject("Janji ditolak!")
//   }
// })

// console.log(janji)
// janji.then((response) => {
//   console.log(response)
// }).catch((err) => {
//   console.log(err)
// })

// promise dengan function
// const janji = (status) => {
//   return new Promise((resolve,reject) => {
//     if (status) {
//       resolve("Janji diterima")
//     } else {
//       reject("Janji ditolak")
//     }
//   })
// }

// janji(false).then((respon) => {
//   console.log(respon)
// }).catch((error) => {
//   console.log(error)
// })

// Asyncronus (await)
// const hello = (status) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       resolve("Salam sejahtera")
//       // if (status){
//       //   resolve("Welcome")
//       // } else {
//       //   reject("not found 404")
//       // }
//     }, 1000)
//   })
// }

// const salam = async() => {
//   const result = await hello()
//   // const result = await hello(false)
//   console.log(result)
//   console.log("Untuk Kita Semua!")
//   // return setTimeout(()=> {
//   //   console.log("Untuk Kita Semua!")
//   // }, 2000) 
// }

// salam()

// try catch
const hello = (status) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (status) {
          resolve("Welcome")
        } else {
          reject("not found 404")
        }
      }, 1000)
    })
  }
  
  const salam = async() => {
    try {
      const result = await hello(true)
      console.log(result)
    } catch (error) {
      console.log(error)
    } 
    // finally {
    //   console.log("Hello World!")
    // }
  }
  
  salam()
