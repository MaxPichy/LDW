import express, {Request, Response} from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de Health Check
app.get('./api/health', (req: Request, res: Response) => {
    res.status(200).json({ 
        message: 'Servidor Backend rodando com sucesso.',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Health Check disponível em: http://localhost:${PORT}/api/health`);
});

