const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Routes = require("./routes/Routes");
require("./config/db")();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	return res.status(200).send("Hello");
});
app.use("/api", Routes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}@http://localhost:${PORT}`);
});
