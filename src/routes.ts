import { Router } from "express";
import { createUserController } from "./usecases/create-user";

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res);
})

export { router }