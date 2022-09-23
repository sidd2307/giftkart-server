const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productRoute = require("./routes/product")
const carousalImgRoute = require("./routes/carousalimg")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB Connection Successfull"))
    .catch((err) => console.log(err))

app.use(express.json())

app.use("/", productRoute)
app.use("/carousal", carousalImgRoute)

app.listen(8800, () => {
    console.log("Backend Server is running!");
})