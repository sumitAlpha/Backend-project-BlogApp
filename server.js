const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());


//import routes 
const blogApp = require("./routes/BlogApp");
//mounting
app.use("/api/v1", blogApp);


//database connection
const connectDB = require("./config/database");
connectDB();

//server started
app.listen(PORT, () => {
    console.log(`App is Runnig At Port number ${PORT}`)
});

//DEFAULT API ROUTE
app.get("/", (req, res) => {
    res.send("This is a dummy Route")
})

