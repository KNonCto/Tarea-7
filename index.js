import express from "express";
import operationsRouter from "./src/routes/operation.router.js";
import { PORT } from "./src/configs/environment.js";

const app = express();

app.use(express.json());

app.use("/operations", operationsRouter);

app.get("/", function (req, res) {
  res.send({ student: "Daniel Parra", title: "Tarea 7" });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
