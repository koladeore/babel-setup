import express from "express";
const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  return res.send("The API is working");
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
