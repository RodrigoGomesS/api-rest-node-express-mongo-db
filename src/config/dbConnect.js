import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:1234mudar@biblioteca.qfoxnri.mongodb.net/alura-node-biblioteca");

let db = mongoose.connection;

export default db;