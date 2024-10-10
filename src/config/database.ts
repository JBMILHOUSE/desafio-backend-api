import mongoose from "mongoose";
import { env } from "../env";

export async function connectionDatabase() {

  try {
    await mongoose.connect(env.MONGO_URL)
    console.log('Conectado ao MongoDB')
  } catch (error) {

    console.log('Erro na conexão com MongoDB', error)
  }
}