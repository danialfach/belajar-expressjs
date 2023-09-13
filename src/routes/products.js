import express from "express";
import productController from "../controller/productController.js";

const router = express.Router();

router.post("/", productController.addProducts);
router.get("/", productController.getAllProducts);
router.patch("/:idProducts", productController.updateProducts);
router.delete("/:idProducts", productController.deleteProducts);

export default router;