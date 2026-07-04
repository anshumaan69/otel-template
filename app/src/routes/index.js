import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Backend template is running" });
});

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
