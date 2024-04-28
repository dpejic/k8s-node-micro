import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@dpticketingdeev/common";
import { createChargeRouter } from "./routes/new";

console.log(process.env.NODE_ENV);

const app = express();
app.set("trust proxy", true);
app.use(json());

if (process.env.NODE_ENV === "test") {
  app.use(
    cookieSession({
      signed: false,
      secure: process.env.NODE_ENV !== "test",
    })
  );
} else {
  app.use(
    cookieSession({
      name: "session",
      keys: ["key2"],
      secure: process.env.NODE_ENV === "test" ? false : true,
      httpOnly: process.env.NODE_ENV === "test" ? false : true,
    })
  );
}
app.use(currentUser);

app.use(createChargeRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
