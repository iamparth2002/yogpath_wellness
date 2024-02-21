const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const User = require('./models/User');
const Exercise = require('./models/Exercise');
const Booking = require('./models/Booking');

const app = express();

mongoose
  .connect(
    'mongodb+srv://iamparth2002:iamparth2002@cluster0.fdcgy8l.mongodb.net/yogpath?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connected!');
  });

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  //   console.log({email,password})
  try {
    const userDoc = await User.create({
      email,
      password,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    const passOk = userDoc.password == password;
    if (userDoc) {
      res.cookie('token', userDoc).json({ email, password }).status(200);
    }
    // // logged in
    // jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
    //   if (err) throw err;

    // });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post('/bookings', async (req, res) => {
  try {
    const { title, image, trainer, rating, date, time, user } = req.body;

    const newBooking = await Booking.create({
      title,
      image,
      trainer,
      date,
      time,
      user,
      rating,
    });
    res.status(200).json(newBooking);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.get('/bookings/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const arr = await Booking.find({
      user: { $in: [id] },
    });
    res.status(200).json(arr);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.delete('/bookings/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const arr = await Booking.findByIdAndDelete(id);
    res.status(200).json('deleted');
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  res.status(200).json(token);
});

app.get('/yogas', async (req, res) => {
  try {
    const arr = await Exercise.find();
    res.status(200).json(arr);
  } catch (error) {
    res.json(500).json(err);
  }
});

app.get('/yogas/:id', async (req, res) => {
  const id = req.params.id;
  const yoga = await Exercise.findById(id);
  res.status(200).json(yoga);
});

app.listen(4000, () => {
  console.log('Server is running on 4000');
});
