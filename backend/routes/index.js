const express=require("express");
const userRouter=require("./user.routes");
const pgRouter=require("./pg.routes");
const router=express.Router();
router.use("/user",userRouter);
router.use("/pg",pgRouter);
module.exports=router;