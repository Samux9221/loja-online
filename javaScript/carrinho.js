const carrinho = [];

function adicionarAoCarrinho(id){

    const produtoSelecionado = lista_produtos.find(produto => produto.id === id);


    if(produtoSelecionado){
        carrinho.push(produtoSelecionado);
        console.log("Produto adicionado ao carrinho: ", produtoSelecionado);

        exibirCarrinho(carrinho);
            /*const produtoCarrinho = document.getElementById('itens-carrinho');
            
            const divProduto = document.createElement("p");
            divProduto.classList.add('itens-carrinho');
            divProduto.innerHTML = `${produtoSelecionado.nome}  (+${produtoSelecionado.preco})<button onClick="removerDoCarrinho(${produtoSelecionado.id})" id="botao-produto-carrinho">❌</button>`;

            const totalCarrinhoElemento = document.getElementById('carrinho-total'); //selecionei o elemento

            let totalCarrinho = parseFloat(totalCarrinhoElemento.textContent.replace('Total: R$ ', '')); // peguei o valor númerico, sem considerar o 'Total: R$ '

            totalCarrinho = totalCarrinho + produtoSelecionado.preco;

            totalCarrinhoElemento.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`


            produtoCarrinho.appendChild(divProduto);*/

    }else{
        console.log("Produto não encontrado e não adicionado ao carrinho!");
    }
}

function exibirCarrinho(carrinho){

    const produtoCarrinho = document.getElementById('itens-carrinho');
    produtoCarrinho.innerHTML = ''; // Limpa os produtos do DOM para atualizar corretamente.

    let totalCarrinho = 0; // Inicializa o total em 0.

    carrinho.forEach(produtoSelecionado => {
        const divProduto = document.createElement("p");
        divProduto.classList.add('itens-carrinho');
        divProduto.innerHTML = `${produtoSelecionado.nome}  (+R$ ${produtoSelecionado.preco.toFixed(2)})<button onClick="removerDoCarrinho(${produtoSelecionado.id})" id="botao-produto-carrinho">❌</button>`;

        produtoCarrinho.appendChild(divProduto);

        totalCarrinho += produtoSelecionado.preco; // Atualiza o total somando o preço do produto.
    });

    const totalCarrinhoElemento = document.getElementById('carrinho-total');
    totalCarrinhoElemento.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`; // Atualiza o total no DOM.
}


/* Aqui vamos implemetar o modal que aparecerá quando o botão carrinho ser apertado */

const botaoCarrinho = document.getElementById('btnCarrinho');
const modal = document.getElementById('modal');

botaoCarrinho.addEventListener('click', function(event){
    modal.style.display = 'flex';
})

const fecharModal = document.getElementById('fechar-modal');

fecharModal.addEventListener('click', function(event){
    modal.style.display = "none";
})

/* Função para remover item do carrinho */

function removerDoCarrinho(idRemover){
        const indice = carrinho.findIndex(produto => produto.id === idRemover); //pego o indice do produto que quero remover
        
        if(indice !== -1){
            carrinho.splice(indice, 1);
            console.log(`Produto com ID ${idRemover} foi removido do carrinho`);
        }
        totalCarrinho = 0;
        exibirCarrinho(carrinho);
}