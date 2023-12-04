let itens = [];

//pegando o evento de click em cadastrar;
document.querySelector('input[type=submit]')
.addEventListener('click', (e) =>{

    e.preventDefault();

    //pegando os valores de dentro dos inputs
    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let precoProduto = document.querySelector('input[name=valor_produto]');
    let listaProdutos = document.querySelector('.lista-produtos');

    //adicionando na lista
    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value,
    })

    //Buscando os itens no array
    listaProdutos.innerHTML = '';
    let soma = 0;
    itens.map((value) => {

        soma += parseFloat(value.valor);//Somando os itens

        listaProdutos.innerHTML += `
        <div class="lista-produtos-single">
            <h3>`  + value.nome + `</h3>
            <h3 class="price-produto"><span>R$ ` + value.valor +`</span></h3>
        </div>
        `;

    })

    soma = soma.toFixed(2);
    //Limpando os campos;
    nomeProduto.value = '';
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = `R$ ${soma}`;
})

document.querySelector('button[name=limpar]')
.addEventListener('click', () =>{
    document.querySelector('.lista-produtos').innerHTML = '';
    document.querySelector('.soma-produto h1').innerHTML = 'R$ 0 '
})
