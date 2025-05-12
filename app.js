const express = require('express');
  
const app = express();
const PORT = process.env.PORT || 5000;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Hello World");
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is running at http://localhost:${PORT}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);