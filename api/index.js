const express = require("express")
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://blog:Halamadrid14@cluster0.qgxipkp.mongodb.net/?retryWrites=true&w=majority');



app.post('/register', (req,res)=> {
    const {username,password} = req.body;
    res.json({requestData:{username,password }})
})

mongoose.connection.once("open", () => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  });
  
//mongodb+srv://blog:<Halamadrid>@cluster0.qgxipkp.mongodb.net/?retryWrites=true&w=majority