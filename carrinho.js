document.addEventListener('DOMContentLoaded', () => {

    const carrinhoItensContainer = document.querySelector('.carrinho-itens');
    const totalCarrinhoElement = document.getElementById('total-carrinho');
    const carrinhoVazioMensagem = document.querySelector('.carrinho-vazio');
    const carrinhoResumo = document.querySelector('.carrinho-resumo');
    
    let carrinho = [
        { id: 1, nome: 'Almofada Conforto', preco: 99.90, imagem: 'images/produtoA.jpg', quantidade: 1 },
        { id: 2, nome: 'Almofada Poá', preco: 119.90, imagem: 'images/produtoB.jpg', quantidade: 2 }
    ];

    function renderizarCarrinho() {
        if (carrinho.length === 0) {
            carrinhoVazioMensagem.style.display = 'block';
            carrinhoResumo.style.display = 'none';
        } else {
            carrinhoVazioMensagem.style.display = 'none';
            carrinhoResumo.style.display = 'block';
        }

        carrinhoItensContainer.innerHTML = '';
        let total = 0;

        carrinho.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('carrinho-item');
            itemElement.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="carrinho-detalhes">
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.preco.toFixed(2)}</p>
                </div>
                <div class="carrinho-acoes">
                    <div class="quantidade">
                        <button class="diminuir-btn" data-id="${item.id}">-</button>
                        <span>${item.quantidade}</span>
                        <button class="aumentar-btn" data-id="${item.id}">+</button>
                    </div>
                    <button class="remover-btn" data-id="${item.id}">Remover</button>
                </div>
            `;
            carrinhoItensContainer.appendChild(itemElement);

            total += item.preco * item.quantidade;
        });

        totalCarrinhoElement.textContent = `R$ ${total.toFixed(2)}`;
    }

    carrinhoItensContainer.addEventListener('click', (event) => {
        const target = event.target;
        const itemId = parseInt(target.dataset.id);

        if (target.classList.contains('diminuir-btn')) {
            const item = carrinho.find(item => item.id === itemId);
            if (item && item.quantidade > 1) {
                item.quantidade--;
                renderizarCarrinho();
            } else if (item && item.quantidade === 1) {
                carrinho = carrinho.filter(item => item.id !== itemId);
                renderizarCarrinho();
            }
        }

        if (target.classList.contains('aumentar-btn')) {
            const item = carrinho.find(item => item.id === itemId);
            if (item) {
                item.quantidade++;
                renderizarCarrinho();
            }
        }

        if (target.classList.contains('remover-btn')) {
            carrinho = carrinho.filter(item => item.id !== itemId);
            renderizarCarrinho();
        }
    });


    renderizarCarrinho();
});