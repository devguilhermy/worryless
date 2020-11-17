import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://worryless:pach1PIT2stat!sauf@cluster0.l3ttc.mongodb.net/<worryless>?retryWrites=true&w=majority",
    { useMongoClient: true }
);
mongoose.Promise = global.Promise;

export default mongoose;
