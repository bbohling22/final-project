const mongoose = require('mongoose');

const { Schema } = mongoose;

const inventorySchema = new Schema({
    itemName: {
      type: String,
      required: true,
      trim: true
    },
    itemDesc: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },
    onHand: {
      type: Number,
      min: 0,
      default: 0
    },
    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Category',
    //   required: true
    // }
  });

  const Inventory = mongoose.model('Inventory', inventorySchema);

  module.exports = Inventory;