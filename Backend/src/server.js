import express from 'express';
import compression from 'compression';
import cors from 'cors';
import connectDB from './db';
import { appRouter } from './Routes/Routes';


const PORT = 4000
const corsOptions = {
    origin: "https://jobapplic.netlify.app",
    methods: '*',                      
  };
const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(compression())



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