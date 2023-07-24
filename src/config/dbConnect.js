import mongoose from "mongoose";

mongoose.connect("path-mongo-db-atlas");

let db = mongoose.connection;

export default db;