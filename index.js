import OpenAI from "openai";
import 'dotenv/config'
import { available_tools } from "./tools.js";
import { systemPrompt } from "./systemPrompts.js";
import e from "express";
import { fileURLToPath } from "url";
import path from "path";
import { connectDB } from "./lib/connect.js";

connectDB(process.env.MONGO_URI)
.then(() => console.log("Connected to DB"))
.catch((error) => {
    console.error("DB error", error);
})

const app = e();
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(e.static('public'));
app.use(e.json());

const messages = [
    {role: 'system', content: systemPrompt}
]

app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'public/index.html'));
})
app.post('/chat', async (req, res) => {
  const userMsg = req.body.message;
  messages.push({ role: 'user', content: userMsg });

  const completion = await client.chat.completions.create({
        model: 'gpt-4o',
        messages,
        temperature: 0.7,
  });

  const reply = completion.choices[0].message.content;
  
  messages.push({role: 'assistant', content:reply });

  try{
    const responseJson = JSON.parse(reply);
    if (responseJson.function === 'logFiles') {
      const transcripts = messages.slice(1)
      const msg = {...responseJson.input, transcripts};
      const result = available_tools.logFiles.fn(msg);
      return res.json({reply: responseJson.content, logged: true, status:result});
    }
    else {
      return res.json({reply: responseJson.content, logged:false});
    }
  } catch(error) {
    console.log(error);
    return res.status(500).send("Something bad happened!")
  }
});

app.listen(8000, ()=> {
  console.log('Server is running on http://localhost:8000');
})
