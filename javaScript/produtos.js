const lista_produtos = [
    {id: 1, nome: "Camisa Polo", preco: 79.90, imagem: "imagens/calca.jpg"},
    {id: 2, nome: "Calça masculina", preco: 95.90, imagem: "imagens/camisetaPolo.webp"},
    {id: 3, nome: "Meia social", preco: 32.75, imagem: "imagens/meia.jpg"},
    {id: 4, nome: "Bermuda casual", preco: 57.80, imagem: "imagens/bermuda.jpg"},
    {id: 5, nome: "Nike Airforce Original", preco: 670.95, imagem: "imagens/airforce.jpg"},
    {id: 6, nome: "Adidas Cam Original", preco: 205.40, imagem: "imagens/adidas.webp"},
    {id: 7, nome: "Adidas Yeezy Original", preco: 1890.30, imagem: "imagens/yeezy.jpeg"}
];

// Seleciona o container onde os produtos serão exibidos
const produtosContainer = document.getElementById("produtos-container");

// Função para exibir os produtos
function exibirProdutos() {
lista_produtos.forEach(produto => {
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
