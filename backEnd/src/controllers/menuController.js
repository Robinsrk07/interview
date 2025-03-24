const MenuModel = require("../model/menuModel");


const addMenuController=async (req, res,next) => {
    try {
        const { menuName, items } = req.body;
        if (!menuName || !items || !Array.isArray(items)) {
            return res.status(400).json({ error: "Invalid data format" });
        }
        const newMenu = new MenuModel({
            menuName: menuName,
            items: items
        })
        await newMenu.save();
        res.status(201).json({ message: "Menu saved successfully", menu: newMenu });
    } catch (error) {
        console.error("Error saving menu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getItems= async(req,res)=>{
    try{
       const items= await MenuModel.find({})
       res.json(items)
    }catch(err){
     console.log(er);
     
    }
  }

  module.exports ={addMenuController,getItems}