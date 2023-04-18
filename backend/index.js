const express = require('express');
const cors = require('cors');
// const passport = require('passport');
// const morgan = require('morgan')
const userRouter = require('./routers/userRoutes');
const jobRouter = require('./routers/jobRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(passport.initialize());
// app.use(morgan('tiny'));

app.use('/api/v1/users/', userRouter);
app.use('/api/v1/jobs/', jobRouter);

app.listen(8000, () => {
  console.log('App running on port 8000!!');
});
