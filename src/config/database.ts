import mongoose from "mongoose";

export async function connectionDatabase() {
  
    try {
      await mongoose.connect('mongodb://localhost:27017/teste')
      console.log('Conectado ao MongoDB')        
    } catch (error) {
      
       console.log('Erro na conexão com MongoDB', error)
    }
}