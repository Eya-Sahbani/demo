import swaggerJsdoc from "swagger-jsdoc";

export default swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Tasks API", version: "1.0.0" },
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas: {
        Task: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            completed: { type: "boolean" },
          },
        },
        TaskInput: {
          type: "object",
          required: ["title"],
          properties: {
            title: { type: "string" },
            description: { type: "string" },
            completed: { type: "boolean" },
          },
        },
        TaskResponse: {
          type: "object",
          properties: { data: { $ref: "#/components/schemas/Task" } },
        },
        TaskListResponse: {
          type: "object",
          properties: {
            data: {
              type: "array",
              items: { $ref: "#/components/schemas/Task" },
            },
          },
        },
        Error: {
          type: "object",
          properties: { error: { type: "string" } },
        },
      },
      responses: {
        NotFound: {
          description: "Tâche introuvable",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Error" },
            },
          },
        },
        BadRequest: {
          description: "Données invalides",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Error" },
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
});
