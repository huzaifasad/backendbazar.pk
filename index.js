const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const url = 'mongodb+srv://huzaifa084567:12345@cluster0.wpihnwn.mongodb.net/';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to the database'))
.catch(()=> console.log('not conncted'));

const laptoprouter = require('./schemas/productrouter/laptop');
const userrouter=require('./schemas/productrouter/user')
app.use('/laptop', laptoprouter);
app.use('/user',userrouter);
app.use('/',(req,res)=>{
  res.send('thiis response') 
})
app.use(cors(
    {
        origin:["https://backendbazar-pk.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }

));
app.listen(1000, () => {
  console.log('Server is running on port 1000');
});
