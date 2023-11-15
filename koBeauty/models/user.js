const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date, 
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// pre-save hook to encrypt user passwords on signup
// right before you save a user, run the following
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = async function (passwordAttempt) {
    try {
        const isMatch = await bcrypt.compare(passwordAttempt, this.password);
        return isMatch;
    } catch (err) {
        throw err; // Rethrow the error for better error handling
    }
};


// method to remove user's password for token/sending the response
userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}


module.exports = mongoose.model("User", userSchema)