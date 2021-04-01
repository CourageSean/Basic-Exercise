const fs = require("fs")
const books = require("./books")

// console.log(books[0].id)

// fs.readFile( './blog1.txt', (err,data)=>{
//     if(err){
//         throw err
//     }else{
//         console.log(data.toString())
//     }
// } )
// //===========
// fs.writeFile( "./blog2.txt", "Sean", ()=>{
//     console.log("file was written")
// } )

// //==========

// if(fs.existsSync("./delete.txt")){
//     fs.unlink("./delete.txt", (err)=>{
//         if(err){
//             throw err
//         }
//             console.log("file deleted")
        
//     })
// }

// //=========
// if(!fs.existsSync("./assets")){
//     fs.mkdir("./assets", (err)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("created folder")
//     }
//     })
// }else{
//     fs.rmdir("./assets",(err)=>{
//         if(err){
//             throw err
//         }else{
//             console.log("folder was removed")
//         }
//     } )
// }

//=============

// books.map((elt)=>{
//     fs.join("./books.txt",`${elt["id"].toString()} ${elt["title"].toString()} ${elt["description"].toString()}`, ()=>{
//         console.log("file was written")})
    //  fs.appendFile("./books.txt",elt["title"].toString(),()=>{
    //     console.log("file was written")})
    
//    } )

// fs.appendFile( "./books.txt",books.map((elt)=>{
//     elt["title"] 
   
// } ).toString(), ()=>{
//     console.log("file was written")
// } )


// const fn3_1 = (word)=>{
//     fs.writeFile( "./assets/test.txt", `${word}`, ()=>{
//              console.log("file was written")
//         } )

// }




if (!fs.existsSync('./MyFunnyFolder')) {
    fs.mkdir('./MyFunnyFolder', () => {
        console.log("MyFunnyFolder erstellt")
    })
} else {
    fs.rmdir('./MyFunnyFolder', () => {
        console.log('MyFunnyFolder gelöscht')
    })
}

if (!fs.existsSync('./What')) {
    fs.mkdirSync('./What', () => { 
      console.log('schon gut sss');
    })
  } else {
    if (!fs.existsSync('./What/isThis.txt')) {
      fs.writeFile('./What/isThis.txt', 'hello', (err) => {
        console.log('schon isThis erstellt');
        console.log(err);
      })
    } else {
        fs.unlink("./What/isThis.txt",()=>{
            console.log("jo")
        })
      fs.rmdir('./What', () => {
        console.log('what und isThis schon gelöscht');
      })
    }
  }