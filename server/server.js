require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
const connectDB = require("./connectDB");
const cookieParser = require("cookie-parser");
connectDB();

// Middleware
app.use(cors());
// app.use(express.static("./dist"));
app.use(express.json());
app.use(cookieParser());

// sessions
const sessionRouter = require("./routes/sessions");
app.use("/api/v1/session", sessionRouter);

// word
const wordRouter = require("./routes/word");
app.use("/api/v1/word", wordRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
