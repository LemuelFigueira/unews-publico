const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// const uriLocal = "mongodb://localhost/mongoooo";

// criar sua conta no atlas mongodb e digite aqui sua url de conxeão ao cluster.
const uriMongo = "seuUri"
const uriLocal = "mongodb://localhost/unews-1";

mongoose.connect(uriLocal, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Mongoose: Conectado ao MongoDB');
}).catch(err => {
    console.log(err);
})