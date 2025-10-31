const express = require('express');
require('dotenv').config({quiet: true});
const SwaggerConfig = require('./src/config/swagger.config');

async function main(){
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    
    require('./src/config/mongoose.config');

    SwaggerConfig(app);
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

main();