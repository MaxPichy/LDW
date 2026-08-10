// 1. Tipagem Implícita
let nomeEstudante = 'Gustavo';
// nomeEstudante = 420;

// 2. Tipagem Explícita
let matriculado: boolean = true;
let idadeAluno: number = 20;
let habilidades: string[] = ['HTML', 'CSS', 'JavaScript'];
let habilidades2: Array<string> = ['HTML', 'CSS', 'JavaScript','TypeScript'];
let notas: Array<number> = [8.5, 9.0, 7.5];

// 3. O perigo do tipo 'any'
let dadosQualquer: any = 'Texto';
dadosQualquer = 100;
dadosQualquer = false;

// 4. Tipagem em funções
function calcularMedia(nota1: number, nota2: number): number {
    return ((nota1 + nota2) / 2);
};

const mediaFinal = calcularMedia(notas[0], notas[1]);
console.log(`Média do aluno: ${mediaFinal}`)

// 5. Parâmetros Opcionais
function exibirPerfil(nome: string, idade?: number): string{
    if(idade !== undefined){
        return `Nome: ${nome}, Idade: ${idade}`
    }
    return `Nome: ${nome}`;
}

console.log(exibirPerfil('Julia'));
console.log(exibirPerfil('Matheus', 22))