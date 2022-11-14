const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/mathRoutes.js"];

const options = {
    host: "localhost:8080",
    basePath: "/api/math"
};
swaggerAutogen(outputFile, endpointsFiles, options);
