import express from 'express';
import cors from 'cors';
import connectDB from './db';
import { appRouter } from './Routes/Routes';


const PORT = 4000
const corsOptions = {
    origin: 'http://localhost:5173',  // Replace with your React app's origin
    methods: '*',                      // Allow all methods
  };
const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));


app.get("/", (req, res) => {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
    res.json({
        "success" : true,
        "Date": formattedDate
    })
})

appRouter(app);

app.listen(PORT, () => {
    console.log(`URl: http://localhost:${PORT}`);
});