const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text123: "world" });
});

app.post("/create", (req, res) => {});

// const userRouter = require("./routes/users");

// app.use("/", userRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
