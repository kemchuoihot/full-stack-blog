import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://post:pxblog@pxblog.sdbcp.mongodb.net/?retryWrites=true&w=majority&appName=PXBlog');
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;