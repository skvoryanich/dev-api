import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get('/bots', async (req, res) => {
  const bots = [{id: 1, name: 'lalala', idtg: 123}, {id: 2, name: 'lalala2', idtg: 12322}];
  res.send(bots);
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
