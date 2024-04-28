import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@dpticketingdeev/common";
import { deleteOrderRouter } from "./routes/delete";
import { indexOrderRouter } from "./routes/index";
import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";

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

app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(showOrderRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
