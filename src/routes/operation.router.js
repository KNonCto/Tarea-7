import express from "express";
import {
  getSum,
  getSubtraction,
  getMultiplication,
  getDivision,
} from "../controllers/operation.controller.js";

const router = express.Router();

router.get("/sum", getSum);
router.get("/subtraction", getSubtraction);
router.get("/multiplication", getMultiplication);
router.get("/division", getDivision);

export default router;
