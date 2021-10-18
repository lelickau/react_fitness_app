const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const errorsMiddleware = require('./middleware/error-middelware');

const app = express();

app.use(express.json({extended: true}));
app.use(cookieParser());
app.use('/api', router);

app.use(errorsMiddleware);

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'));
        app.listen(PORT, () => console.log(`App has been started. ${PORT}`), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}
start()
