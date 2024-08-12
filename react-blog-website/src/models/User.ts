import mongoose, {Schema}from "mongoose";

export interface User{
  fullName: string;
  email: string;
  telephone: number;
}


const UserSchema: Schema<User> = new mongoose.Schema({
    fullName: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    telephone: {
      type: Number,
      required: [true, 'Password is required'],
    },
  });
  
  const UserModel =
    (mongoose.models?.User as mongoose.Model<User>) ||
    mongoose.model<User>('User', UserSchema);
  
  export default UserModel;