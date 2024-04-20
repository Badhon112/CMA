import mongoose from "mongoose";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  photourl: string;
};

const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
    unique: true,
  },
  photourl: {
    type: String,
    require: true,
    unique: true,
  },
});

const User = mongoose.model<UserType>("Users", userSchema);

export default User;
