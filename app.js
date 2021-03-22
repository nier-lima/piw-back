const app = require('./src/config/server'); 
const db = require('./src/config/database');


app.listen(process.env.port || 3003, () => {
    console.log('Server running in port 3003');
});

db('mongodb+srv://ronier>:dIR3J1YOy74xwh9O@ronier.vzhca.mongodb.net/social?retryWrites=true&w=majority');    
