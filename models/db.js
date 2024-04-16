import { connect } from 'mongoose';

connect('mongodb://localhost:27017/ecommerceOrders', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('Database Connected');
    } else {
        console.log('Error: ', err);
    }
});

import '../models/ordermodel.js';

