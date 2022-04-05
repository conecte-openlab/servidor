# Hello World Http

Para o primeiro contato com o protocolo Http, será necessário a utilização do node-red e de um site ([link](https://reqbin.com/req/zvtstmpb/post-request-example)).

O primeiro passo será a preparação do ambiente do node-red para que o teste possa ocorrer. Será feito uma pagina na web em um servidor local. Basta seguir os passos abaixo:
- Na parte esquerda da página principal do node-red, será necessário selecionar os seguintes itens: 
  - "Http in", que será configurado da seguinte maneira:
  ![pic](/media/git/Http/dois.png)
  O método selecionado será o get. A url a ser colocada representa a parte depois da primeira barra, do link da página do node.

  - "Template", que deve ser codificado de acordo com a utilização da página. No caso, apenas um exemplo será utilizado.: 
  ![pic](/media/git/Http/tres.png)
  O título é o nomeamento da aba. H1 os principais cabeçalhos.

  - "Http Response", nao precisa ser configurado.

Assim, ao fim da primeira parte, basta linkar os tres itens e a página estará em sua rede. 
 ![pic](/media/git/Http/cinco.png)

 ![pic](/media/git/Http/quatro.png)
 Relembrando que o link é o ip do node-red com o complemento escolhido no "Http in".

O segundo passo será requerir as informações do site criado, por um secundário. Para isso, será necessario a utilização do link proposto no primeiro parágrafo. Siga os passos adiante:

 - Ao iniciar o link, faça a substituição do link sugerido pelo site, pelo link da página desenvolvida. Além disso, é necessario a troca da função utilizada para o "Get" ![pic](/media/git/Http/seis.png)
 - Agora, basta apertar no botão "Send" que todas as informações da página serão abertas em "content":
 ![pic](/media/git/Http/sete.png)



 # Captura de informações
 Na primeira parte deste documento, uma pagina local foi desenvolvida e informações foram capturadas da mesma, por outra página. Nesta parte, será escolhida uma pagina e informações dela serão extraídas pelo node-red.

 O primeiro passo, novamente, será a preparação do ambiente do node-red. Na parte lateral esquerda da página, devem ser selecionados:
  -"Timestamp": não é necessário configura-lo.
  -"Http request": apenas será colocado o link da url em que será extraída a informação. No caso, o utilizado foi o [link](https://nodered.org/).

  -"Html": a configuração deste, deve ser feita do seguinte modo:
  ![pic](/media/git/Http/oito.png)

  Ressaltando que o "Filter" se refere à classe, ou "diretório" da informação a ser obtida.
    ![pic](/media/git/Http/nove.png)

  -"Debug": não é necessário configura-lo.

Assim, com o ambiente preparado, basta fazer a linkagem dos blocos e apertar no botão do "timestamp".
    ![pic](/media/git/Http/dez.png)
    No canto direito, na parte"Debug", estará o dado requisitado de outra aba.