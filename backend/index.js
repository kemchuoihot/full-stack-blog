import express from 'express';
import postRoute from './routes/post.route.js';
import connectDB from './lib/connectDB.js'
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use(cors('http://localhost:5173'));
app.use('/posts', postRoute);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});

