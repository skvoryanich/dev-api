import { PrismaClient } from '@prisma/client';
import express from 'express';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json())

app.get('/bots', async (req, res) => {
  const bots = await prisma.bots.findMany()
  res.json(bots)
})

app.get('/bots/:id', async (req, res) => {
  const { id } = req.params
  const bots = await prisma.bots.findMany({
    where: { id: Number(id) },
  })
  res.json(bots)
})

app.post(`/bots`, async (req, res) => {
  const result = await prisma.bots.create({
    data: { ...req.body },
  })
  res.json(result)
})

app.put('/bots/:id', async (req, res) => {
  const { id } = req.params
  const bot = await prisma.bots.update({
    where: { id: Number(id) },
    data: { ...req.body },
  })
  res.json(bot)
})

app.delete(`/bots/:id`, async (req, res) => {
  const { id } = req.params
  const bot = await prisma.bots.delete({
    where: { id: Number(id) },
  })
  res.json(bot)
})

const getHashedPassword = (password: any) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}
// app.post('/register', async (req, res) => {
//     const { login, password, confirmPassword } = req.body;
//
//     if (password === confirmPassword) {
//       const userHave = await prisma.bots.findMany({where: { id: Number(id) }})
//       if (userHave) {
//         res.render('register', {
//           message: 'User already registered.',
//           messageClass: 'alert-danger'
//         });
//         return;
//       }
//       const hashedPassword = getHashedPassword(password);
//
//       users.push({
//         firstName,
//         lastName,
//         email,
//         password: hashedPassword
//       });
//       res.render('login', {
//         message: 'Registration Complete. Please login to continue.',
//         messageClass: 'alert-success'
//       });
//     } else {
//       res.render('register', {
//         message: 'Password does not match.',
//         messageClass: 'alert-danger'
//       });
//     }
// });

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
