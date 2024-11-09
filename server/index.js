const  express = require( 'express');  
require ('./database'); 


const app = express();


app.use('/api', (req, res) => {
    res.send('Hello World');
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
