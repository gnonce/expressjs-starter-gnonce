import mongoose from "mongoose";

const databaseUri =
  process.env.AUCTIONDATA_DB_URI || "mongodb://localhost:27017/auction-engine";

export const auctionDataConnection = mongoose.createConnection(
  databaseUri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);