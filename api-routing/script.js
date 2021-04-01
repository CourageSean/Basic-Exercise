const express = require("express")
const {moviess} = require("./moviedata")
const path = require('path');
const app = express()
app.set("view engine","ejs")


app.listen(3020,()=>{
console.log("listening (port:3020)")

} )

app.get("/movies/:id", (req,res)=>{
    let search = req.params.id
    const mova = moviess.filter((elt)=>{
 return elt.year === String(search)
    } )
res.render("index",{mova,search})
console.log(req.params.id);




} )
app.use(express.static('public'));

