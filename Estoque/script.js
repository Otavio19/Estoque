var estoque = []
const url = 'https://627a5bba73bad50685877731.mockapi.io/produtos/movProdutos'
const urlProdutos = 'https://627a5bba73bad50685877731.mockapi.io/produtos/produto'
var estoqueAtual = 100

class movEstoque{
	constructor(nomeProduto,movimentacao,quantidade){
		this.nomeProduto = nomeProduto
		this.movimentacao = movimentacao
		this.quantidade = quantidade
	}
}

function buscar(){
	$.get(urlProdutos, function(dados){
		for(var i = 0; i < dados.length; i++){
			console.log(dados[i].nomeProduto)
			$('#produtos').append(`
				<option>${dados[i].nome}</option>`)
		}
	})
}

function salvar(){
	for (var i = 0; i <= estoque.length; i++) {
		var produto = new movEstoque(estoque[i].nomeProduto,estoque[i].movimentacao,estoque[i].quantidade)
		$.post(url, produto)
	}
}

function adicionar(){
	nomeProduto = $('.txtProduto').val()
	movimentacao = $('.movimentacao').val()
	quantidade = $('.txtQuantidade').val()

	if(nomeProduto == '' || movimentacao == '' || quantidade == ''){
		alert('Verique os campos!')
	}else{
		estoque.push(new movEstoque(nomeProduto,movimentacao,quantidade))
		console.log(estoque)

		$('.tabelaItens').html('')
		$('.tabelaItens').append(`<tr class="linhaTable">
			<td>ID</td>
			<td>Produto</td>
			<td>Movimentação</td>
			<td>Quantidade</td>
			<td>Estoque Futuro</td>
			<td>Estoque Atual</td>
			</tr>`)
		for(var i = 0 ; i < estoque.length ; i++){
			var estoqueFuturo = 0
			switch(estoque[i].movimentacao){
				case 'entrada':
				estoqueFuturo += parseInt(estoque[i].quantidade)
				break;

				case 'saida':
				estoqueFuturo -= parseInt(estoque[i].quantidade)
				break;
			}

			$.get(urlProdutos, function(dados){
				for(var i = 0; i < dados.length; i++){
					console.log(dados[i])
				}
			})

			$('.tabelaItens').append(`
				<tr class="linhaTable">
				<td>ID</td>
				<td>${estoque[i].nomeProduto}</td>
				<td>${estoque[i].movimentacao}</td>
				<td>${estoque[i].quantidade}</td>
				<td>${estoqueFuturo}</td>
				<td>${dados[i].quantidade}</td>
				</tr>`)
		}
	}
}