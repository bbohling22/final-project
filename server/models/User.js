const mongoose = require('mongoose')

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const Batch = require('./Batch');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
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
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        }
    ]
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

 