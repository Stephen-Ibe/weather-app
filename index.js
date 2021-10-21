const express = require("express");
const cors = require("cors");
require("dotenv/config");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ success: true });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
