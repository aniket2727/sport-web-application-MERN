


const express=require('express');
const cors=require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(cors());
const registerRouter = require('./router/register.router'); // register


app.use(express.json());
require('./database/config');
app.use('/hooks/register', registerRouter);   // for register user





const PORT = 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

