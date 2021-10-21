const express = require("express");
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT || 5000;
const app = express();

// routes import
const mainRoutes = require("./routes");

// enable cors
app.use(cors());

// Routes
app.use("/api", mainRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//khensanimamoepa