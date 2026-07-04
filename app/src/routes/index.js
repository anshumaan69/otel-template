import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

export default router;
