const mongoose = require('mongoose')

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const Batch = require('./Batch');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true  
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    // batch: [Batch.schema]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

