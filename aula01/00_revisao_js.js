// 1. Desestruturação

const usuario = {
    nome: 'Luis',
    idade: '22',
    curso: 'DSM',
    endereco: {
        cidade: 'Registro',
        estado: 'SP'
    }
}

// Forma antiga
// console.log(usuario.nome)

const {nome, curso, endereco:{cidade}, endereco} = usuario;
console.log('Desestruturação: ', nome, curso, cidade, endereco);


const cores = ['#ff0000', '#00ff00', '#0000ff'];
const [ vermelho, verde] = cores;
//console.log(vermelho, verde);


// 2. Spread, Rest
const configOriginal = {tema: 'dark', idioma: 'pt-br'}
const configUsuario = {...configOriginal, fonte: 'Fira Code'} // Spread
console.log('Spread', configUsuario);

function somarValores(primeiro, ...resto){ // Rest
    return primeiro + resto.reduce((acc, val) => acc + val, 0);
}
console.log('Rest: ', somarValores(10, 20, 30, 40, 50));

// 3. Funções assíncronas

const buscarDadosDoBanco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;

            if(sucesso){
                resolve({status: 200, dados: ['React', 'TypeScript', 'Vite']});
            } else{
                reject('Erro na conexão com o banco.');
            }
        }, 1000)
    });
}

async function processarDados(){
    try{
        console.log('\n[fun async] 1. Iniciando a busca de dados..');
        const resposta = await buscarDadosDoBanco();

        console.log('\n[fun async] 2. Dados obtidos com sucesso: ', resposta.dados);
    }catch (error){
        console.log('\n[fun async] Erro ao obter dados: ', error);
    }
}

console.log('\n[Global] A. Antes de disparar a função assíncrona...')
processarDados();
console.log('\n[Global] B. Disparado!')