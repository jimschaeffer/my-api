import express from "express";
import jobRouter from "./openjobs.route";

const router = express.Router();

router.use("/openjobs", jobRouter);
router.get("/test", (req, res) => {
  res.send("working");
});

export default router;
