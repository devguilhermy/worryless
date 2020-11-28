import mongoose from "mongoose";

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@maincluster.l3ttc.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

export default mongoose;
