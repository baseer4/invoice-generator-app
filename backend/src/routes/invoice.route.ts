import express from "express";
import { downloadInvoice } from "../controllers/invoice.controller";  

const router = express.Router();

router.get("/invoice",downloadInvoice);


export default router;