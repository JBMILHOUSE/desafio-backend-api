import { Schema, model, Document } from 'mongoose';

// Definir a interface do Ganhador, que estende o Document do Mongoose
interface IGanhador extends Document {
  name: string;
  prize: string;
  date: Date;
}

// Definir o esquema de Ganhador
const ganhadorSchema = new Schema<IGanhador>({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
  },
  prize: {
    type: String,
    required: [true, 'Prêmio é obrigatório'],
  },
  date: {
    type: Date,
    required: [true, 'Data é obrigatória'],
  },
});

// Exportar o modelo com o tipo IGanhador
export default model<IGanhador>('Ganhador', ganhadorSchema);
