import express, { Request, Response } from "express";
import overlapJoinwithExclude from "./services/services";

// import http from "http";
const app = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.json({ message: "Hello! ,welcome to a server" });
  });
app.get('/Assignment', (req: Request, res: Response) => {
  let includes= req.body.includes || [];
  let excludes = req.body.excludes || [];
  let data = overlapJoinwithExclude(includes,excludes)
  res.json({ message: data });
})

app.listen(3000, async () => {

    console.log(`Server started on port 3000`);
  });