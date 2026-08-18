import { Router, Request, Response } from 'express';
import { User } from '../models/User'; 

const router = Router();

// GET /api/users - Listar todos os usuários
router.get('/', async (req: Request, res: Response) => {
    try{
        const usuarios = await User.findAll({
            attributes: ['id', 'nome', 'email', 'createdAt']
        });
        return res.status(200).json(usuarios);

    } catch(error: any){
        return res.status(500).json({erro: 'Erro ao listar usuários.', detalhe: error.message});
    }
});

// GET /api/users/:id - Buscar usuário por id
router.get('/', async (req: Request, res: Response) => {
    try{
        const {id} = req.params;

        const usuario = await User.findByPk(Number(id), {
            attributes: ['id', 'nome', 'email', 'createdAt']
        });

        if(!usuario){
            return res.status(404).json({erro: 'Usuário não encontrado.'})
        }

        return res.status(200).json(usuario);

    } catch(error: any){
        return res.status(500).json({erro: 'Erro ao buscar usuário.', detalhe: error.message})
    }
});

// // PUT /api/users/:id - Alterar usuários
// router.put('/', (req: Request, res: Response) => {
//     try{
//         const {id} = req.params;
//         const {nome, email, senha_hash} = req.body;

//         const usuario = await User.update({
//             attributes
//         })
//     } catch(error: any){
//         return res.status(500).json({erro: 'Erro ao editar usuário.', detalhe: error.message})
//     }
// });

// POST /api/users - Cadastrar novo usuário
router.post('/', async (req: Request, res: Response) => {
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

export {router as userRoutes}