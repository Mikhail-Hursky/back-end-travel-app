import * as express from "express";
import * as cors from "cors";
import { join } from "path";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as mongoose from "mongoose";


import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";

const { NAME, PASSWORD } = process.env;

mongoose.connect(
  `mongodb+srv://${NAME}:${PASSWORD}@cluster0.oplxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// error handler
app.use(
  (
    err: { message: any; status: any },
    req: { app: { get: (arg0: string) => string } },
    res: {
      locals: { message: any; error: any };
      status: (arg0: any) => void;
      render: (arg0: string) => void;
    },
    next: any
  ) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
);

export default app;
