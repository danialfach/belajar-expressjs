import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post('/', userController.createNewUsers);
router.get('/', userController.getAllUsers);
router.patch('/:idUser', userController.updateUser);
router.delete('/:idUser', userController.deleteUser);

export default router;