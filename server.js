const express = require("express");
const mongoose = require("mongoose");

const courseRoutes = require("./routes/courseroutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/courseDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
    res.send("Course Registration API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});