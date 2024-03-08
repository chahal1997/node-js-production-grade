import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DBNAME}`,
    );
    console.log(
      `\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
