const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv/config");

const PORT = process.env.PORT || 5000;
const app = express();

// rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 20,
});

// routes import
const mainRoutes = require("./routes");

// enable cors
app.use(cors());
app.use(limiter);
app.set("trust proxy", 1);

// Routes
app.use("/api", mainRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
