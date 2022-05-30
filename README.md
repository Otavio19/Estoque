<h1> Estoque </h1>

<p>Nesse projeto busquei desenvolver um pouco melhor meu conhecimento sobre as requisições na API usando Ajax.</p>
<p>Em resumo temos duas telas, onde um será cadastrado os produtos e na outra terá as movimentações no estoque.</p>

<div style="display:inline-block">
<img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img alt="jQuery" src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
</div>

<h2> Imagens 📷 </h2>

<h3> Cadastro de produto ➕</h3>
<p>Nessa tela eu adicionei apenas dois campos, um será o nome do produto e o outro informará a quantidade que está no estoque.</p>

![image](https://user-images.githubusercontent.com/64386117/170965602-381434e5-5354-48c4-b074-e3315ce43e29.png)

<h3>Movimentações no estoque ✍️</h3>
<p>Nessa tela a barra de pesquisa do nome dos produtos vai buscar na API os produtos cadastrados, quando seleciona o produto é possível informar qual o tipo de movimentação, sendo: </p>

<ul>
  <li>Entrada: Soma a quantidade informada no campo "Quantidade" e soma com o estoque atual do produto.</li>
  <li>Saída: Subtrai a quantidade que está no estoque atual com a quantidade informada no campo "Quantidade".</li>
  <li>Inventário: Substitui o estoque atual pela quantidade informada no campo "Quantidade".</li>
</ul>

![image](https://user-images.githubusercontent.com/64386117/170967841-b2350b49-1696-4bf3-bc72-be9888a625fd.png)

<h3>Campo buscar na movimentação</h3>
OBS: O "Adicionar" apenas adiciona as informações na tabela a baixo. Para salvar na API é necessário clicar em 'Salvar'.
<img width="886" alt="jSonInicial" src="https://user-images.githubusercontent.com/64386117/170968878-f1d3c938-ed17-4d84-940a-391d744be06a.png">
<img width="781" alt="campoBusca" src="https://user-images.githubusercontent.com/64386117/170969480-fa5b8d01-d8a6-45eb-8378-57d60a9e6207.png">

<h3>Resultado na tabela</h3>
<p>OBS: Eu não desenvolvi ainda o método do "Inventário" </p>
<img width="815" alt="resultadoTabela" src="https://user-images.githubusercontent.com/64386117/170971101-108b00f9-2a6b-490a-8f34-ef257df31d14.png">


<h3>Colunas</h3>
<ul>
  <li>ID: ID do produto na API.</li>
  <li>Produto: Nome do Produto.</li>
  <li>Movimentação: Tipo de movimentação que será aplicada.</li>
  <li>Estoque Atual: Estoque atual que está na API.</li>
  <li>Estoque Futuro: Vai aplicar o calculo baseado no tipo de movimentação.</li>
  <li>Ação: Por enquanto apenas o delete, porém o mesmo apenas exclui o produto da tabela, não exclui quando Salva para ir na API.</li>
  <li>Subir: Caso tenha muitos produtos cadastrados, ao clicar nesse botão ele subirá a página para a parte de cadastro de movimentação.</li>
</ul>

<h3>Resultado na API</h3>
<img width="960" alt="resultadoApi" src="https://user-images.githubusercontent.com/64386117/170970923-bd73c7b9-6412-42a6-86f8-6ffad6d26ecd.png">
