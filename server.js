import express from 'express';
import path, { join } from 'path'; // "path" modülünün "join" özelliğini içe aktarın
import mime from 'mime-types';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
import exphbs from 'express-handlebars';
import bodyparser from 'body-parser'; 

import router from '../ecommerce/controllers/orderController.js';
// let mime=join;
// res.writeHead(200,{"Content-type":mime});
const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static(join(__dirname, '/public'))); // "join" fonksiyonunu kullanarak "path" modülünün "join" özelliğini kullanın
//  app.use('/',function(req,res) {
// //  http://localhost:3000/#
//    res.set(200,{"Content-Type":mime});
//     res.set('Content-Type', 'text/html');
// // // //res.write('Response body');
// // res.writeHead(200,{"Content-type":mime});
// res.end();

 //});

app.set('views', join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: join(__dirname, 'views'),// "join" fonksiyonunu kullanarak "path" modülünün "join" özelliğini kullanın
   // res.writeHead(200,{"Content-type":mime});
}));
// app.set(200,{"Content-type":mime});
// app.set('Content-Type', 'text/html');
app.set('view engine', '.hbs');


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/', router);

