// 1. Tipos de categorias parte 02
type CategoriaUsuario = 'Premium' | 'Vip' | 'Regular';
type ChaveDeAcesso = string | number;

let categoria: CategoriaUsuario = 'Vip'
let chave: ChaveDeAcesso = 'abc123';
chave = 9876;

// 2. Interfaces
interface Endereco{
    cidade: string,
    estado: string,
    cep?: string // Opcional
}

interface Aluno{
    readonly id: string,
    nome: string,
    categoria: CategoriaUsuario,
    endereco: Endereco
}

const aluno1: Aluno = {
    id: 'DSM-001',
    nome: 'Amanda',
    categoria: 'Premium',
    endereco: {
        cidade: 'Registro',
        estado: 'SP'
    }
}

aluno1.nome = 'Amanda Lima';
// aluno1.id = 'novo-id'