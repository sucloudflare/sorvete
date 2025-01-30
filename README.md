<h1>Cardápio Sorveteria</h1>

  <h2>Descrição</h2>
  <p>O "Cardápio Sorveteria" é uma aplicação web simples onde o usuário pode selecionar sabores de sorvete e tipos de sorvete (casquinha, copinho ou taça), adicionar as opções escolhidas ao carrinho de compras e visualizar o conteúdo do carrinho.</p>
 <p>A aplicação utiliza o React para a construção da interface, Next.js para roteamento e Bootstrap para o design responsivo.</p>

 <h2>Funcionalidades</h2>
 <ul>
   <li><strong>Escolha de Sabores</strong>: O usuário pode escolher entre 5 sabores de sorvete: Chocolate, Vanilla, Morango, Limão e Coco.</li>   <li><strong>Escolha de Tipos</strong>: O usuário pode selecionar o tipo de sorvete, podendo ser Casquinha, Copinho ou Taça.</li>
  <li><strong>Carrossel de Itens</strong>: As opções de sabores e tipos são exibidas em carrosséis, permitindo navegação com setas ou tocando diretamente nos itens.</li>
    <li><strong>Carrinho de Compras</strong>: O usuário pode adicionar as combinações de sabor e tipo ao carrinho e visualizar as opções selecionadas.</li>
  <li><strong>Responsividade</strong>: A interface se adapta a diferentes tamanhos de tela utilizando Bootstrap e Slick Carousel.</li>
   </ul>

   <h2>Tecnologias Utilizadas</h2>
  <ul>
 <li><strong>React</strong>: Biblioteca JavaScript para construção da interface.</li>
 <li><strong>Next.js</strong>: Framework para roteamento e renderização do lado servidor.</li>
 <li><strong>Bootstrap</strong>: Framework CSS para layout responsivo e design.</li>
 <li><strong>Slick Carousel</strong>: Biblioteca para exibição de carrosséis.</li>
 </ul>

 <h2>Instalação</h2>
 <p>Para rodar o projeto localmente, siga os seguintes passos:</p>
 <ol>
<li>Clone o repositório:
    <pre><code>git clone https://github.com/seu-usuario/sorvete.git</code></pre>
      <p>Em seguida, entre na pasta do projeto:</p>
       <pre><code>cd sorvete</code></pre>
   </li>
    <li>Instale as dependências:
     <pre><code>npm install</code></pre>
   </li>
   <li>Inicie o servidor de desenvolvimento:
            <pre><code>npm run dev</code></pre>
   </li>
  <li>Acesse a aplicação no navegador:
    <pre><code>http://localhost:3000</code></pre>
     </li>
 </ol>

 <h2>Como Usar</h2>
 <ul>
<li>Selecione o sabor desejado clicando nos botões no carrossel de sabores.</li>
   <li>Selecione o tipo de sorvete clicando nos botões no carrossel de tipos.</li>
  <li>Após escolher sabor e tipo, clique no botão "Adicionar ao Carrinho" para adicionar ao carrinho de compras.</li>
   <li>Clique em "Ir para o Carrinho" para visualizar as opções adicionadas ao carrinho.</li> </ul>
<h2>Estrutura de Pastas</h2>
   <pre><code>
/pages
  /index.js           # Página principal com os carrosséis e carrinho
/public
  /img
    /sorvetes         # Imagens dos sabores de sorvete
/components
  /Slider.js          # Componente para o carrossel
/styles
  /globals.css        # Estilos globais da aplicação
    </code></pre>

<h2>Contribuição</h2>
<p>Sinta-se à vontade para fazer um fork do projeto e enviar pull requests com melhorias ou correções de bugs.</p>

<h2>Licença</h2>
<p>Este projeto é licenciado sob a MIT License - veja o arquivo <code>LICENSE</code> para mais detalhes.</p>
<p>Codigo de Edson Bruno</p>
