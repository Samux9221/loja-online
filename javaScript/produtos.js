
const lista_produtos = [
    {id: 1, nome: "Camisa Polo", preco: 79.90, imagem: "imagens/camisetaPolo.webp", categoria: ["masculino", "social"]},
    {id: 2, nome: "Calça masculina", preco: 95.90, imagem: "imagens/calca.jpg", categoria: ["masculino", "casual"]},
    {id: 3, nome: "Meia social", preco: 32.75, imagem: "imagens/meia.jpg", categoria: ["social", "feminino", "masculino"]},
    {id: 4, nome: "Bermuda casual", preco: 57.80, imagem: "imagens/bermuda.jpg", categoria: ["masculino", "casual"]},
    {id: 5, nome: "Nike Airforce Original", preco: 670.95, imagem: "imagens/airforce.jpg", categoria: ["masculino"]},
    {id: 6, nome: "Adidas Cam Original", preco: 205.40, imagem: "imagens/adidas.webp", categoria: ["masculino", "feminino"]},
    {id: 7, nome: "Nike AirForce Original", preco: 670.30, imagem: "imagens/airforceFem.jpg", categoria: ["feminino"]},
    {id: 8, nome: "Adidas Yeezy Original", preco: 1890.30, imagem: "imagens/yeezy.jpeg", categoria: ["masculino", "feminino"]},
    {id: 9, nome: "Bolsa Fgk", preco: 363.80, imagem: "imagens/bolsaFem.jpg", categoria: ["feminino", "casual"]},
    {id: 10, nome: "Calça Renner", preco: 105.70, imagem: "imagens/calcaFem.webp", categoria: ["feminino", "casual"]},
    {id: 11, nome: "Camiseta de Algodão", preco: 87.30, imagem: "imagens/camisetaFem.jpg", categoria: ["feminino", "casual"]}
];


// Seleciona o container onde os produtos serão exibidos
const produtosContainer = document.getElementById("produtos-container");

// Função para exibir os produtos
function exibirProdutos(produtos) {

    produtosContainer.innerHTML = '';

    produtos.forEach(produto => {
    // Cria o elemento HTML para cada produto
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto");

    produtoDiv.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <button id="button-produto" onclick=adicionarAoCarrinho(${produto.id})>Adicionar ao Carrinho</button>
    `;

    // Adiciona o produto ao container
    produtosContainer.appendChild(produtoDiv);
});
}

// Seleciona todos os botões-filtros da página
const botoes = document.querySelectorAll(".filtro-categoria");


function filtrarProdutos(categoriaBotao){

    const lista_produtos_filtrado = lista_produtos.filter(produto => produto.categoria.includes(categoriaBotao));

    exibirProdutos(lista_produtos_filtrado);
}

botoes.forEach(botao => {
    botao.addEventListener("click", function(event) {
        // 'event.target' representa o botão clicado
        categoriaBotao = event.target.id;

        if(categoriaBotao === "todos"){
            exibirProdutos(lista_produtos);
        }else{
            filtrarProdutos(categoriaBotao);
        }
    });
});

/* addEventListener
Adiciona um ouvinte de eventos a um elemento. Executa uma função sempre que o evento
especificado ocorre. */
