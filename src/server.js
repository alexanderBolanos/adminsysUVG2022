const express = require('express');
const path = require('path');
const mathRoutes = require("./routes/mathRoutes");
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 8080;
const author = process.env.AUTHOR || "Extraño";

app.get("/isAlive", (req, res)=>{
    console.log(">>> yes!");   
    res.send( `hola ${ author }`);
});

// ------------------------------------------------

app.use("/api/math", mathRoutes);


// --- website ----
app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});



app.listen(PORT, ()=>{ console.log(`Deploy and Listening to port ${PORT}`)});