// asyncronus
console.log("Hello World")
setTimeout(() => {
  console.log("Hai Tomi")
},1000)
console.log("Good Vibes")

// callback asyncronus
// const pertama = () => console.log("Satu")
// const kedua = (ketiga ) => {
//   setTimeout(() => {
//     console.log("Dua")
//     // ketiga()
//   }, 1000)
// }
// const ketiga = () => {
//   console.log("Tiga")
// }

// pertama()
// kedua()
// ketiga()

// Asyncronus (await)
// const hello = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       resolve("Salam sejahtera")
//     }, 1000)
//   })
// }

// const salam = () => {
//   hello()
//   console.log("Hai Tomi")
// }

// const salam = async() => {
//   const result = await hello()
//   console.log(result)
//   // console.log("Untuk Kita Semua!")
//   return setTimeout(()=> {
//     console.log("Untuk Kita Semua!")
//   }, 2000) 
// }

// salam()

// try catch
const hello = (status) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (status) {
          resolve("Salam sejahtera")
        }
      }, 1000)
    })
  }
  
  const salam = async() => {
    const result = await hello()
    console.log(result)
    // console.log("Untuk Kita Semua!")
    return setTimeout(()=> {
      console.log("Untuk Kita Semua!")
    }, 2000) 
  }
  
  salam()
