const express = require('express');
const server = express();
const PORT  = 3291;
server.listen(PORT, ()=> console.log("Server is running on port " + PORT));
server.get("/",(req, res) =>{
  res.send(
    {
      ok: true,
      code: 200
    }
  )
})