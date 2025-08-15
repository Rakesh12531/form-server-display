import express from "express"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'client-side')));

const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'client-side', 'index.html'));
});

app.post('/submit',(req,res)=>{
    const formData = req.body;
    console.log(formData);
    res.send(`Hi! ${formData.name}`);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});