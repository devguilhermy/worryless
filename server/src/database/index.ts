import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://worryless:pach1PIT2stat!sauf@cluster0.l3ttc.mongodb.net/<worryless>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

export default mongoose;
