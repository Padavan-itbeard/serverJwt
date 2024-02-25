import express from "express";

const PORT = 8080;
const HOST = 'localhost';
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({ statusServer: "live" })
});

app.listen(PORT, HOST, () => {
  console.log(`Server listens http://${HOST}:${PORT}`);
})