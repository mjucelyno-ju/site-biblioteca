const livros = [
    {
        id: 1,
        titulo: "O Peregrino",
        autor: "John Bunyan",
        categoria: "ficçao",
        total: 2,
        emprestados: 86,
        ativo: true
    },
    {
        id: 2,
        titulo: "Cristianismo Puro e Simples",
        autor: "C. S. Lewis",
        categoria: "Vida Cristã",
        total: 100,
        emprestados: 79,
        ativo: true
    },
    {
        id: 3,
        titulo: "uma vida com propósitos",
        autor: "Rick Warren",
        categoria: "Vida Cristã",
        total: 2,
        emprestados: 80,
        ativo: false
    },
    {
        id: 4,
        titulo: "Meu Sol de Primavera",
        autor: "Queren Ane",
        categoria: "ficçao",
        total: 2,
        emprestados: 45,
        ativo: false
    }
];
// 1-implementação.
function calcularDisponiveis(livro) {
    return Math.max(0, livro.total - livro.emprestados);
}
function somar(id,total)
{
    return id+ total
}
console.log(somar(30,4));
// 2-implementação.
const livrosAtivos = livros.filter(livro =>
    livro.ativo && calcularDisponiveis(livro) > 0
);

console.log("Livros ativos com disponibilidade:", livrosAtivos);

// 3-implementação.
const resumos = livros.map(livro => ({
    titulo: livro.titulo,
    disponibilidade: calcularDisponiveis(livro)
}));

console.log("Resumos:", resumos);

// 4-implementação.
const livroEncontrado = livros.find(livro => livro.total === 2);
console.log("Livro encontrado:", livroEncontrado);

// 5-implementação.
const algumEsgotado = livros.some(livro =>
    calcularDisponiveis(livro) === 0
);
console.log("Existe algum livro esgotado?", algumEsgotado);

// 6-implementação.
const todosPossuemAutor = livros.every(livro =>
    livro.autor && livro.autor.trim() !== ""
);
console.log("Todos possuem autor?", todosPossuemAutor);

// 7-implementação.
const totalDisponiveis = livros.reduce(
    (soma, livro) => soma + calcularDisponiveis(livro),
    0
);

console.log("Total de exemplares disponíveis:", totalDisponiveis);

// 8-implementação.
console.table(
    livros.map(livro => ({
        id: livro.id,
        titulo: livro.titulo,
        autor: livro.autor,
        ativo: livro.ativo,
        disponibilidade: calcularDisponiveis(livro)
    }))
);
