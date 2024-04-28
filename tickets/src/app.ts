import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@dpticketingdeev/common";
import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { indexTicketRouter } from "./routes/index";
import { updateTicketRouter } from "./routes/update";

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

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
