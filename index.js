const express = require('express');
const { Client } = require('pg');

const app = express();
const port_number = process.env.PORT || 5000;



app.get('/', (req, res) => {
  client.connect();

  const client = new Client({
  connectionString: 'postgres://yadcxethtlqosn:20fdd8e07a709fae226a7c685df595d7162d04f8dd1081f731b3639b29ad334b@ec2-3-227-68-43.compute-1.amazonaws.com:5432/d2cm8tatb0l79l',
  ssl: {
    rejectUnauthorized: false
  }
});
  
  client.query('SELECT * FROM resident', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
    
  });
});

app.listen(port_number, () => {
  console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:4000 in a browser to see the output.
