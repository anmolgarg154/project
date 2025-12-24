import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  Password: {
    type: String,
    required: [true, "Password is required"],
  },
});

// 🔐 HASH PASSWORD BEFORE SAVE
UserSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) return next();
  this.Password = await bcrypt.hash(this.Password, 10);
  next();
});

// ✅ INSTANCE METHOD (THIS FIXES YOUR ERROR)
UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.Password);
};

export const Usermodel = mongoose.model("Users-register", UserSchema);
