# Primeira versão 

Ao baixar e executar a primeira versão do servidor, terá o fluxo completo de funcionamento do mesmo. O texto abaixo demonstra três divisões do flow com suas devidas explicações. Vale a pena ressaltar que os erros de conexão que estão nas imagens ocorrem devido ao programa não estar ligardo.

## Primeiro fluxo - Usuário

![pic](/servidor/media/git/PrimeiraVersao/primeirofluxo.png)

    O fluxo acima demonstra a seguinte sequência: inicialmente, o fluxo faz o recebimento de informações via MQTT. Em seguida, os dados são transformados em dados do tipo JSON. Quando os dados alcançam o "Switch", as funções declaradas pelo usuário, antes de enviar as informações via MQTT, são separadas. Caso seja do tipo [{"funcao":login}] ele seguirá o fluxo de baixo. Caso seja do tipo {"funcao":cadastro}] ele seguirá o fluxo de cima. 
        - Fluxo superior: quando o dado chega na funação "Cadastro" ele é realocado nas devidas variáveis para inserção do banco de dados. Caso a realocação não ocorra, o banco não aceitará a instrução e o fluxo terá um erro, não completando o comando. Assim, após a realocação das variáveis e o envio do objeto para o banco, o bloco do Mongo DB está com o comando insertOne, fazendo com que o objeto seja inserido no banco de dados. A segunda função é responsável somente por efetuar o envio da mensagem de retorno com "Cadastro ok", tanto no node-red, quanto via MQTT para o usuário que efetuou o cadastro.
        - Fluxo inferior: quando o dado chega na funação "Longin" ele é realocado nas devidas variáveis necessárias para pesquisa no banco de dados. Assim, após a realocação das variáveis e o envio do objeto para o banco, o bloco do Mongo DB está com o comando findOne, fazendo com que o objeto seja pesquisado no banco de dados. Assim, o banco de dados fará um retorno que entrará na função que contém um if-else. Caso o objeto seja encontrado, o banco o retornará por enteiro, entretanto a função faz com que apenas um "login ok" seja enviado via MQTT. Caso o objeto não seja encontado, o banco envará um objeto vazio, fazendo com que a função retorne "login erro" via MQTT e fluxo.

## Segundo Fluxo - Pesquisa

![pic](/servidor/media/git/PrimeiraVersao/segundofluxo.png)

    Inicialmente, esta parte do fluxo tem como objetivo devolver ao usuário o ultimo registro de dados dos sensores. O segundo fluxo começa com o recebimento de dados via MQTT. O Switch abaixo é meramente para demonstração de possivel expansão. Logo em seguida do recebimento, o dado é convertido para o formato JSON. A função é responsável, assim como as demais, para o realocamento de dados. Neste caso, em expecífico, tem-se a pesquisa no fluxo pelo ultimo número setado no cadastro, com funcionamento similar à um id, ou contador, que será visto mais a frente. Assim, a pesquisa é efetuada por este número e rotornada via MQTT ao usuário.

## Terceiro Flixo - Registro de dados

![pic](/servidor/media/git/PrimeiraVersao/terceirofluxo.png)

    Este fluxo tem como objetivo fazer o recebimento e controle de dados provindos do sensor de medição. Inicialmente, no fluxo de cima, ocorre o recebimento da informação via MQTT e a conversão do dado para o tipo JSON. Assim como no segundo fluxo, o Switch é meramente para demonstração de possivel expansão do flow. A função, neste caso, tem como objetivo não so fazer o realocamento de dados, más, também a inserção de informações nos mesmos. Tem-se a inserção de data-hora e do número de contagem de dados, que funcionaria como um id. Por fim, ocorre a inserção do dado, já incrementado, no banco do Mongo Db, utilizando o insertOne. O pequeno fluxo abaixo do explicado, teve como intuito apenas fazer a declaração da variável de contagem utilizada no segundo e terceiro fluxos.