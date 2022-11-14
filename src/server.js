const express = require("express");
const path = require("path");
const mathRoutes = require("./routes/mathRoutes");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
const author = process.env.AUTHOR || "Extraño";

app.use(cors());

app.get("/isAlive", (req, res) => {
    console.log(">>> yes!");
    res.send(`hola ${author}`);
});

// ------------------------------------------------

app.use("/api/math", mathRoutes);

app.use("/api/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// --- website ----
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.listen(PORT, () => {
    console.log(`Deploy and Listening to port ${PORT}`);
});
