import express from "express";
import openjobs from "../controllers/openjobs.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await openjobs.findOne(id);
  } else {
    data = await openjobs.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let jobDTO = req.body;
  let data = await openjobs.addOne(jobDTO);
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let jobDTO = req.body;
  let data = await openjobs.updateOne(id, jobDTO);
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await openjobs.removeOne(id);
  res.json(data);
});

export default router;
