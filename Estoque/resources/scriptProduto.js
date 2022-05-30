const url = 'https://627a5bba73bad50685877731.mockapi.io/produtos/produto'
var index = -1
var produtos = []
var objetos = []

$.get(url, data => produtos = data)

class Produto{
	constructor(nomeProduto, estoqueProduto){
		this.nomeProduto = nomeProduto
		this.estoqueProduto = estoqueProduto
	}

	//Esse método salva o Produto na API.
	salvar(a){
		$.post(url,a)
	}

	//Esse método lista o nome dos produtos na barra de pesquisa.
	carregarProdutos(){
		for (var i = 0; i < produtos.length; i++) {
			$('#produtos').append(`<option> 
				${produtos[i].nomeProduto}</option>`)
		}
	}

	//Esse método vai receber o nome do produto, com o nome do produto
	//Devo filtrar na lista de produtos o produto com esse nome e recuperar o ID.
	adicionarProduto(nome,movimentacao,quantidade){
		var resultado = produtos.find(dado => dado.nomeProduto === nome)

		var estoqueFuturo = parseInt(quantidade)

		switch(movimentacao){
			case 'entrada':
			estoqueFuturo = parseInt(resultado.estoqueProduto) + parseInt(estoqueFuturo)
			break;

			case 'saida':
			estoqueFuturo = parseInt(resultado.estoqueProduto) - parseInt(estoqueFuturo)
			break;
		}

		objetos.push({'ID': resultado.id,'Estoque': estoqueFuturo,'Mov':movimentacao})
		
		$('.tabelaItens').append(`
			<tr class="linhaTable">
			<td>${resultado.id}</td>
			<td>${resultado.nomeProduto}</td>
			<td>${movimentacao}</td>
			<td>${resultado.estoqueProduto}</td>
			<td>${quantidade}</td>
			<td>${estoqueFuturo}</td>
			<td><button onclick="deleteProduto(this, ${resultado.id})">Delet</button></td>
			</tr>`) 
	}

	async salvarLista(){

		for (var i = 0; i < objetos.length; i++) {
			console.log(i)
			await this.atualizarProduto(objetos[i].ID,objetos[i].Estoque)
		}

	}

	async atualizarProduto(id,valor){
		console.log(valor)
		await $.ajax({
			url: url + '/'+id,
			type: 'PUT',
			data: 'estoqueProduto=' + valor,
			success: function (result) {
				{
					console.log('ID: ' + id + " atualizado")
				}
			}
		});
	}

	removeItem(a,id){
		var tr = $(a).closest('tr');
		tr.fadeOut(400, function(){
			tr.remove();
		})
		console.log('Remover da Lista: '+id)
		console.log(objetos)
	}
	
}