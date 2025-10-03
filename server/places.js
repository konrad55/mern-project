import express from "express";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "Places route" });
// });

router.get("/:pid", (req, res) => {
  const placeId = parseInt(req.params.pid);

  if (isNaN(placeId)) {
    const error = new Error("Invalid place id");
    error.code = 404;
    throw error;
  }

  res.json({ message: "Places route", placeId: placeId });
});

export default router;
