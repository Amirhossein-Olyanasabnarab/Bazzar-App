const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function SwaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition:{
            openapi: "3.0.1",
            info: {
                title: "Bazzar App",
                description: "Endpoint of Bazzar App",
                version: "1.0.0"
            }
        },
        apis: []
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/swagger", swaggerUi.serve, swagger);
}

module.exports = SwaggerConfig;