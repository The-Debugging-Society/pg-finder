import express from 'express';
import userRouter from "./user.routes.js";
import pgRouter from "./pg.routes.js";

const router=express.Router();

router.use("/user",userRouter);
router.use("/pg",pgRouter);

export default router;