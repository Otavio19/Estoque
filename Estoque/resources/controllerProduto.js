function salvar(){
	var nome = $('#produto').val()
	var estoque = $('#estoque').val()
	var produto = new Produto(nome,estoque)
	produto.salvar(produto)
}
	var produto = new Produto()

function carregarProdutos(){
	produto.carregarProdutos()
}

function adicionarProduto(){
	var nomeProduto = $('.txtProduto').val()
	var movimentacao = $('.movimentacao').val()
	var quantidade = $('.txtQuantidade').val()

	produto.adicionarProduto(nomeProduto,movimentacao,quantidade)
}

function salvarLista(){
	produto.salvarLista()
}

function deleteProduto(a,id){
	produto.removeItem(a,id)
}