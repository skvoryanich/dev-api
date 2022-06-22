import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get('/bots', async (req, res) => {
  res.send('lalala');
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
