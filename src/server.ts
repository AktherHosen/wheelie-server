import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://wheelie:tpp7iIUBT09GCbH8@cluster0.bmhyihx.mongodb.net/wheelie?appName=Cluster0"
    );

    console.log("Connect to DB!");
    server = app.listen(5001, () => {
      console.log(`Server is listening to port 5001`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.. Server is shutting down!");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// Unhandled rejection error
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected.. Server is shutting down!", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

Promise.reject(new Error("I forgot to catch this promise"));

// Unhandled exception error
process.on("uncaughtException", (err) => {
  console.log("Unhandled Exception detected.. Server is shutting down!", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// throw new Error("I forgot to handle this local error")
