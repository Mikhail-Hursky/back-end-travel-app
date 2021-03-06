import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as mongoose from "mongoose";
//require("dotenv").config();

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";
import uploadRouter from "./routes/upload";

const { NAME, PASSWORD } = process.env;

mongoose.connect(
  `mongodb+srv://${NAME}:${PASSWORD}@cluster0.oplxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var app = express();

app.use(logger("dev"));
app.use(cors());
app.use('/static', express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/upload", uploadRouter);

app.use(express.static(__dirname));

export const PATH = __dirname;

// error handler
app.use(
  (
    err: { message: any; status: any },
    req: { app: { get: (arg0: string) => string } },
    res: {
      locals: { message: any; error: any };
      status: (arg0: any) => void;
      json: (arg0: any) => void;
    },
    next: any
  ) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
  }
);

export default app;
