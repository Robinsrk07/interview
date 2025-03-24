const express = require("express");
const router = express.Router();
const MenuModel = require("../model/menuModel");
const {addMenuController,getItems} = require("../controllers/menuController")


   router.post('/addMenu',addMenuController);
   router.get("/getItems",getItems)



module.exports = router;
