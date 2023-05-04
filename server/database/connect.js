import mongoose from "mongoose";


export default async function connect(){
    await mongoose.connect(`mongodb+srv://nanimadhani:NANI7143@cluster0.dkm7i2d.mongodb.net/?retryWrites=true&w=majority`)
    console.log('connected to moongose database')
}