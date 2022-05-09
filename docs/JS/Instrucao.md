Este é um documento que resume, de forma mais básica, a playlist (link) do curso em vídeo. É recomendado que a playlist seja assistida a partir do módulo II. Caso o usuário já tenha conhecimento de programação, o resumo é suficiente.

# Resumo


- Inicialmente, inicie o arquivo ".html"

- Para formatação tradicional, digite "html:5"

- Comandos básicos:

    - Em "head", utiliza-se Css. 
        - A personalização do cabeçalho da pagina utilizando <style> </style>. Utilizando os comandos básicos para personalização head{ } e body{ }.
        - Personalizações principais:
            #Coloração de fundo:
                background-color: bisque;
            #Coloração da fonte
                color: chocolate;
            #Informações da fonte
                font: normal 18pt Arial;


    - Em body, utiliza-se JS para interação do usuário. Os principais comnados estão a seguir:

        //Título; o escrito entre tags será o título da página:
        -<h1> Título </h1>

        //Parágrafo; o escrito entre as tags paragrafado:
        -<p> Parágrafo</p>

        //Alerta; O usuário receberá um alerta ao inicializar a página que será o escrito entre as aspas e parênteses:
        -window.alert('Alerta ao inicializar a página')

        //Prompt; o escrito entre aspas e parênteses será indicado como instrução e o usuário terá um prompt para escrita:
        -window.prompt('Digite algo:')

         Exemplo:
        ![img](/media/meio.png)
        ![img](/media/um.png)

        - [referencia](https://www.youtube.com/watch?v=OmmJBfcMJA8&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=7&ab_channel=CursoemV%C3%ADdeo) (min:6'00")
       

    ## Comentários:
    - O comentário de uma linha é dado por "//"
    - Comentário com mais de uma linha é dado por "/*" e fechado por "*/"

    ## Os tipos de variáveis em JS tem como base:
    ### Number:
    Representa a variável numérica, 
    independente de seu tipo.
    
    - Para conversão para numeros inteiros, utiliza-se:
    
        Uma variável para para numero inteiro

                "Number.parseInt(variável)"

        Para conversão para numeros racionais, utiliza-se:

                "Number.parseFloat(variável)"


    ### String:
    Texto padrão
    
    - Para conversão de uma variável para string:
      
        Uma variável para string:

                "String(variavel)"
                "variável.toString()"

//Recomenda-se o video o (link)[https://www.youtube.com/watch?v=OJgu_KCCUSY&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=9&ab_channel=CursoemV%C3%ADdeo] para o trabalho com strings (9'30" min)

### Boolean:
     representa o positivo e negativo, zero e um.