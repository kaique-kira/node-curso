import mongoose from "mongoose";
import "dotenv/config";
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGO_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MondoDB is connect");
  }
);

let db = mongoose.connection;
export default db;
