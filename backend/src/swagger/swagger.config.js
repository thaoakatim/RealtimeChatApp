import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chat App API",
      version: "1.0.0",
    },
  },
  apis: ["./src/swagger/paths/*.yaml"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
