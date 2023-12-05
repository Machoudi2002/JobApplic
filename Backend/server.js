import express from 'express';

const PORT = 4000
const app = express();

app.get("/Jobs", (req, res) => {
    res.json({

        "id": "hbefewnef4434",
        "jobTitle": "Senior Javascript Developer",
        "description": "Javascript Developer with 7+ years of experience with web development Reactjs, Redux, Next.js, NodeJS, and other"

    })
})

app.listen(PORT, () => {
    console.log(`URl: http://localhost:${PORT}`);
});