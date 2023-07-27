// import dependancies in the  router files
const express=require("express");
const router=express();
const multer = require("multer");
const userControllers=require("../controllers/user_controllers");


//import user controllers files here
router.post("/signup",userControllers.User_Signup);
router.post("/login",userControllers.User_Login);

module.exports=router;