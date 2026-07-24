import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from container",
    service: "Hello node",
    pod: process.env.POD || "unknown",
    time: new Date().toISOString(),
  });
});

app.get("/healthz", (req, res) => res.status(200).send("OK"));
app.get("/readyz", (req, res) => res.status(200).send("ready"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
