const {connect, connection} = require('mongoose');

const connectionString =
process.env.MONGODB_URI || 'mongodb+srv://jprentiss:<password>@cluster0.9vcyjwr.mongodb.net/?retryWrites=true&w=majority';

connect(connectionString, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;