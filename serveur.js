import app from "./app.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";
await connectDB(process.env.MONGO_URI);
app.listen(5000,()=>{
    console.log("lancement de serveur");
    
});