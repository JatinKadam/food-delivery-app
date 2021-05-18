import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();
const PORT = 5000;
//66312
app.use(cors());
const data = fs.readFileSync("data.json");

app.get("/", (req, res) => {
  res.send(data);
});
app.get("/:id", (req, res) => {
  const { id } = req.params;
  let info = JSON.parse(data);
  let singleRes = info.filter((e) => e.id === id);
  let resMenu = singleRes[0].menu;
  // let items = resMenu.map((e) => e.name);
  res.send(resMenu);
});

app.listen(PORT, () => {
  console.log(`sv is running at port ${PORT}`);
});
