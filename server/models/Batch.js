const mongoose = require('mongoose');

const { Schema } = mongoose;

const batchSchema = new Schema({
    batchDate: {
        type: Date,
    },
    inventory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Inventory'
        }
    ]
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch