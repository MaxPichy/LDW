import { Request, Response } from "express";
import { JWT_SECRET } from "../config/auth";
import bcrypt from 'bcryptjs'
import { User} from "../models/User";

export class UserController{
    // GET /api/users - Lista todos os usuários
    public static async index(req: Request, res: Response): Promise<Response>{
        try{
            const users = await User.findAll({
                attributes: ['id', 'nome', 'email', 'createdAt', 'updatedAt']
            });
            return res.status(200).json(users);

        } catch(error: any){
            return res.status(500).json({erro: 'Erro ao listar usuários.', detalhe: error.message});
        }
    }

    // GET /api/users/:id - Busca um usuário
    public static async show(req: Request, res: Response): Promise<Response>{
        try{
            // Id
            const id = parseInt(req.params.id as string, 10);
            if(isNaN(id) || id <= 0){
                return res.status(400).json({
                    erro: 'O ID informado deve ser um número.'
                });
            }

            const user = await User.findByPk(id, {
                attributes: ['id', 'nome', 'email', 'createdAt', 'updatedAt']
            });

            if(!user){
                return res.status(404).json({erro: 'Usuário não encontrado.'});
            } else{
                return res.status(200).json(user);
            }

        } catch(error: any){
            return res.status(500).json({erro: 'Erro ao buscar usuário.', detalhe: error.message});
        }
    }

    // POST /api/users/ - Cria um usuário
    public static async create(req: Request, res: Response): Promise<Response>{
        try{
            const {nome, email, password} = req.body;

            // Nome
            if(!nome || typeof(nome) !== 'string' || nome.trim() === ''){
                return res.status(400).json({erro: 'O campo nome é obrigatório.'});
            }

            // Senha
            if(!password || typeof(password) !== 'string' || password.length < 6){
                return res.status(400).json({erro: 'A senha deve conter no mímino 6 caracteres.'});
            }

            // Email
            const userExistente = await User.findOne({where : {email: email.trim()}})
            if(userExistente){
                return res.status(400).json({erro: 'Já existe um usuário cadastrado com este email.'});
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!email || !emailRegex.test(email.trim())){
                return res.status(400).json({erro: 'Informe um email válido.'});
            }

            const senha_hash = await bcrypt.hash(password, 10);

            if(!nome || !email || !senha_hash){
                return res.status(400).json({erro: 'Os campos nome, email e senha são obrigatórios.'});
            }

            const novoUser = await User.create({
                nome: nome.trim(), 
                email: email.trim().toLowerCase(), 
                senha_hash
            });

            return res.status(201).json({
                nome: novoUser.nome, 
                email: novoUser.email, 
                senha_hash: novoUser.senha_hash
            });

        } catch(error: any){
            return res.status(500).json({erro: 'Erro ao criar usuário.', detalhe: error.message});
        }
    }

    // PUT /api/users/:id - Atualiza um usuário
    public static async update(req: Request, res: Response): Promise<Response>{
        try{
            // Id
            const id = parseInt(req.params.id as string, 10);
            if(isNaN(id) || id <= 0){
                return res.status(400).json({
                    erro: 'O ID informado deve ser um número.'
                });
            }
            const {nome, email, senha_hash} = req.body;

            const user = await User.findByPk(id);
            if(!user){
                return res.status(404).json({erro: 'Usuário não encontrado.'});
            }

            // Nome
            if(nome !== undefined){
                if(typeof(nome) !== 'string' || nome.trim() === ''){
                    return res.status(404).json({erro: 'O campo nome deve ser um texto válido.'});
                }
                user.nome = nome.trim();
            }

            // Email
            if(email != undefined){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!email || !emailRegex.test(email.trim())){
                    return res.status(400).json({erro: 'Informe um email válido.'});
                }

                const emailEmUso = await User.findOne({where: {email: email.trim().toLowerCase()}});
                if(emailEmUso && emailEmUso.id !== id){
                    return res.status(400).json({erro: 'Este email já está em uso.'});
                }

                user.email = email.trim().toLowerCase();
            }

            if(nome) user.nome = nome;
            if(email) user.email = email;
            if(senha_hash) user.senha_hash = senha_hash;

            await user.save();

            return res.status(200).json({
                id: user.id,
                nome: user.nome,
                email: user.email,
                senha_hash: user.senha_hash
            });

        } catch(error: any){
            return res.status(500).json({erro: 'Erro ao editar usuário.', detalhe: error.message});
        }
    }

    // DELETE /api/users/:id - Deleta um usuário
    public static async delete(req: Request, res: Response): Promise<Response>{
        try{
            // Id
            const id = parseInt(req.params.id as string, 10);
            if(isNaN(id) || id <= 0){
                return res.status(400).json({
                    erro: 'O ID informado deve ser um número.'
                });
            }

            const user = await User.findByPk(id);

            if(!user){
                return res.status(404).json({erro: 'Usuário não encontrado.'});
            }
            await user.destroy();

            return res.status(204).send();
        } catch(error: any){
            return res.status(500).json({erro: 'Erro ao excluir usuário.', detalhe: error.message});
        }
    }
}