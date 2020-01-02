import mongoose from "mongoose";

beforeEach(function(done) {
  /*
    Define clearDB function that will loop through all 
    the collections in our mongoose connection and drop them.
  */
  const clearDB = () => {
    for (const i in mongoose.connection.collections) {
      mongoose.connection.collections[i].deleteOne(() => {});
    }
    return done();
  };

  /*
    If the mongoose connection is closed, 
    start it up using the test url and database name
    provided by the node runtime ENV
  */
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(
      `mongodb://localhost:27017/${process.env.TEST_SUITE}`,
      { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, // <------- IMPORTANT
      err => {
        if (err) {
          throw err;
        }
        return clearDB();
      }
    );
  } else {
    return clearDB();
  }
});

afterEach(function(done) {
  return done();
});

afterAll(done => {
  mongoose.disconnect();
  return done();
});
