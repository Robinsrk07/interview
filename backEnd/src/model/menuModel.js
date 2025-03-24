const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be at least 1"],
    validate: {
      validator: (value) => value > 0,
      message: "Price must be a positive number"
    }
  },
  description: {
    type: String,
    trim: true
  }
});

const MenuSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true,
    trim: true
  },
  items: {
    type: [MenuItemSchema],
    default: [] 
  }
}, { timestamps: true });

MenuSchema.path('items').validate(function (items) {
  const names = items.map(item => item.name.toLowerCase().trim());
  return new Set(names).size === names.length;
}, 'Duplicate items are not allowed');

const MenuModel = mongoose.model('Menu', MenuSchema);
module.exports = MenuModel;
