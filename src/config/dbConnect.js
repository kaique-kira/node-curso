import mongoose from "mongoose";


// mongoose.connect("mongodb+srv://Kira:b2TKs0llkE2mOVxi@kira.hzxiklg.mongodb.net/Kira-Node");



mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb+srv://Kira:b2TKs0llkE2mOVxi@kira.hzxiklg.mongodb.net/Kira-Node",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () =>{
        console.log('MondoDB is connect')
    })

let db = mongoose.connection;
 export default db;