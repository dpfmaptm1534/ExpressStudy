// ** Create Read */
import * as express from "express";
import Router from "./cats/cats.route";

const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[5]);
  console.log("this is logging middleware");
  next();
});

//* json middleware
app.use(express.json());

app.use(Router);

//* 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
