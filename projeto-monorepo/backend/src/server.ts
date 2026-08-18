import express, {Request, Response} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { User } from "./models/User";
import { sensitiveHeaders } from "node:http2";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de Health Check
app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({ 
        status: 200,
        message: 'Servidor Backend rodando com sucesso.',
        timestamp: new Date().toISOString()
    });
});

// Cadastrar novo usuário
app.post('/api/users', async (req: Request, res: Response) => {
    try{
        const {nome, email, senha_hash} = req.body;
        if(!nome || !email || !senha_hash){
            return res.status(400).json({erro: 'Nome, Email e Senha_Hash são obrigatórios.'});
        }

        const novoUsuario = await User.create({nome, email, senha_hash});

        return res.status(201);

    } catch(error: any){
        return res.status(500).json({erro: 'Erro ao cadastrar usuário.', datalhe: error.message})
    }
});

// Listar todos os usuários
app.get('/api/users', async (req: Request, res: Response) => {
    try{
        const usuarios = await User.findAll({
            attributes: ['id', 'nome', 'email', 'createdAt']
        });
        return res.status(200).json(usuarios);

    } catch(error: any){
        return res.status(500).json({erro: 'Erro ao listar usuários.', detalhe: error.message});
    }
});

async function main() {
    try{
        await sequelize.authenticate();
        console.log('Conexão com o PostgreSQL no Supabase realizada com sucesso.');

        app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Health Check disponível em: http://localhost:${PORT}/api/health`);
        });

    }catch(error){
        console.log('Erro ao conectar com o banco de dados.', error);
    }
}

main();