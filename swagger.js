import swaggerAutogen from "swagger-autogen";
//fichier de configuration
const doc = {
  info: { title: "Tasks API", version: "1.0.0" },
  servers: [{ url: "http://localhost:3000" }],
  components: {
    securitySchemes: {
      bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
    },
    schemas: {
      TaskInput: {
        $title: "Réviser le cours",
        description: "Chapitres 1 à 3",
        completed: false,
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"]; // fichier où tu montes les routes (app.use("/api/tasks", ...))

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
