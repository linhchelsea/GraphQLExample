import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import config from './config';
// var schema = require('./graphql/index');
import schema from './graphql';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

// app.use('/assets',express.static(__dirname + '/public'));
// app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());

app.use('/graphql', graphqlHTTP( () => ({
    schema,
    graphiql : true,
    pretty : true
})));


var port = process.env.port || 3000;
app.listen(port, function(){
    console.log('Server is running on port: '+port);
});

