const carrinho = [];

function adicionarAoCarrinho(id){

    const produtoSelecionado = lista_produtos.find(produto => produto.id === id);

    if(produtoSelecionado){
        carrinho.push(produtoSelecionado);
        console.log("Produto adicionado ao carrinho: ", produtoSelecionado);

            const produtoCarrinho = document.getElementById('itens-carrinho');
            
            const divProduto = document.createElement("p");
            divProduto.classList.add('itens-carrinho');
            divProduto.textContent = `${produtoSelecionado.nome}  (+${produtoSelecionado.preco})`;

            const totalCarrinhoElemento = document.getElementById('carrinho-total'); //selecionei o elemento

            let totalCarrinho = parseFloat(totalCarrinhoElemento.textContent.replace('Total: R$ ', '')); // peguei o valor número, sem considerar o 'Total: R$ '

            totalCarrinho = totalCarrinho + produtoSelecionado.preco;

            totalCarrinhoElemento.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`


            produtoCarrinho.appendChild(divProduto);

    }else{
        console.log("Produto não encontrado e não adicioando ao carrinho!");
    }

}