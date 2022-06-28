# Primeiro teste MQTT x Mongo

Abaixo se encontram as instruções de como foi efetuada a primeira conexão completa entre o mongo db e mqtt:
- Inicialmente, a primeira parte do flow é responsável por enviar o dado json via mqtt. As instruções de conexão do mqtt se encontram na documentação do mesmo. O código dentro da function apenas insere as informações do usuário. O código é:
    
        var obj= [{"_id":"9","funcao":"pesquisa","name":"Nicolas", "age":21,"car":"mustang"}]
        msg.payload=obj
        return msg
    - O código insere um id, a função que se pede, nome, idade e carro. Apenas um exemplo para teste. todos podem ser alterados.

- Agora, percorrendo o flow principal, encontra-se um switch com as duas primeiras funções que serão utilizadas no servidor: cadastro e pesquisa. Assim, quando atravessar o switch, tem-se a conversão de string para json e a implementação da função designada:
    - Caso seja cadastro, cairá no insertOne, que insere os dados no MongoDb
    - Caindo no caso da pesquisa, terá o tratamento de dados abaixo. Com este código, é retirado o nome do array de json e atribuído apenas ao msg.payload, fazendo com que o mesmo seja inserido no banco de dados para pesquisa.
        
            var name= msg.payload[0].name;
            msg.payload=[{"name":name}];
            return msg;
        Assim, com o retorno do banco de dados, é transmitido todos os nomes que correspondem ao inserido.

- Vale a pena ressaltar que, todos os debugs no flow são meramente para análise do processo.

![img](/ConectandoNodeRed/PrimeiraSincroniza%C3%A7%C3%A3o/imagens/Sem%20t%C3%ADtulo.png)