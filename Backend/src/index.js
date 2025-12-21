import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why don't scientists trust atoms? Because they make up everything!",
            content: "Some content here"
        },
        {
            id: 2,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
            content: "Some content here"
        },
        {
            id: 3,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
            content: "Some content here"
        }
    ];

    res.json(jokes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
