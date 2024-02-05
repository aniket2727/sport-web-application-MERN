


const express=require('express');
const cors=require('cors');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(cors());
const registerRouter = require('./router/register.router'); // register
const loginRouter = require('./router/login.router'); // login
// images fetched routers
const getimage = require('./router/sportimage.router'); // Corrected import
const getproductinfo=require('./router/getproductinfor.Router')   //get all product info




app.use(express.json());
require('./database/config');

app.use('/hooks/register', registerRouter);   // for register user
app.use('/hooks/login', loginRouter);  // for the login user
app.use('/hooks/getimage', getimage); // Corrected usage
app.use('/hooks/getallproduct',getproductinfo) // get all product info




const PORT = 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

