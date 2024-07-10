const express = require('express');
const dotenv = require("dotenv");
const { default: mongoose } = require('mongoose');
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();
app.use(express.json);

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to database");
    } catch(err) {
        console.log("Server is NOT connected to database", err.message);
    }
  
};

connectDb();

app.get("/", (req, res) => {
    res.send("API is running.......");
});

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is Running..."));
