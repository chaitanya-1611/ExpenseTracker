const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDb = require("./config/connectDb");
dotenv.config();

connectDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//user Ruote
app.use("/api/v1/users", require("./routes/userRoute"));
//transaction route
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log("listening on server");
});
