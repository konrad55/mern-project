import express from "express";
import placesRoutes from "./places.js";

const app = express();

app.use("/api/places", placesRoutes);

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
  next(error);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
