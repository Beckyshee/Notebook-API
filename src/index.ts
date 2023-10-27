import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// const app = express();
app.use(express.json())
app.use(cors());

app.get("api/notes", async(req, res)=>{
  const notes = await prisma.note.findMany();
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const { id, title, content, createdAt } = req.body;
  try {
    const note = await prisma.note.create({
      data: {id,
        title,
        content,
        createdAt
      },
    });
    res.status(201).json(note);
  } catch (error) {
    console.error("Error creating a note:", error);
    res.status(500).json({ error: "An error occurred while creating the note." });
  }
});

app.listen(4000, ()=>{
  console.log("listening on 4000");
});








































// // sample code

// import { createServer } from "http";

// const server = createServer((req, res) => {
//   res.end("Hello, world!");
// });

// server.listen(3000, () => {
//   console.log("listening on 3000");
// });

// // install typescript, ts-node and nodemon to run ts file directly  without compiling on terminal with
// //  npm install -D typescript ts-node nodemon
// // and add script to package.json => "start": "nodemon --exec ts-node src/index.ts" or dev: "nodemon  src/index.ts"


