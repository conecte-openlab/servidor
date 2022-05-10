# Intruções para o primeiro projeto básico

### Introdução:
O objetivo deste primeiro projeto é fazer um ciclo completo, em que a informação será enviada, recebida, tratada, armazenada e exposta ao usuário. Inicicialmente, será utilizado MQTT, em seguida o HTTP

### Requisitos:
Serão requisitados a utilização: node-red, MQTTBox e MongoDB Clound.

### Estrutura:
Para que o projeto ocorra de forma eficiente, é necessário que o MQTTBox esteja funcionando para que o servidor esteja conectado. Segue o (link)[] com a instalação e configuração do mesmo. Para o entendimento da utilização do protocolo e a interação com o node-red recomenda-se este [video](https://www.youtube.com/watch?v=XwpapCUh9bU&t=4s&ab_channel=JorgeAugustoMondadori).

A estrutura utilizada para este projeto é a que segue abaixo:

![pic](/media/git/ProjetoNode/Diagrama%20geral.png)

- De cima para baixo, começando com "Servidor", que utiliza-se o Aedes Broker, que seria a conexão com a hospedagem do servidor. O mesmo é utilizado na forma padrão, sendo assim desnecessário configura-lo.

- A segunda e a terceira linha são as bases das comunicações. Na segunda, tem-se um inject com nome "Iniciar", com "msg.payload=iniciar", ligado à uma function. A funtion faz apenas a alteração do msg.payload setado acima para "msg.payload=hora". Para o fim deste fluxo, tem-se a transmissão da informação para o tópico setado.
  - [Link](https://www.youtube.com/watch?v=03NwekIdcMo&t=488s&ab_channel=ShahramJalaliniya) para configuração do Clound MongoDB
   
- No terceiro e ultimo fluxo, a informação é recebida pela inscrição no tópico, em seguida bifurcada. Na parte superior, em "function", tem-se o tratamento do dado para que apareça apenas a parte desejada (o código segue abaixo), em seguida publicada no tópico. Já na parte inferior, a informação é armazenada no DataBase da nuvem do MongoDB.

#### Código utilizado para tratamento de dados:
 
    if(msg.payload=="hora"){
    
    var now = new Date();

    let localDate = new Date(now.toLocaleString('pt-BR', { timeZone: "Europe/Budapest" }));
    let offset = now.getTime() - localDate.getTime();
    now.setTime( now.getTime() + offset );

    var yyyy = now.getFullYear();
    var mm = now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1); // getMonth() is zero-based
    var dd  = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    var hh = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    var mmm  = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    var ss  = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    node.status({fill:"grey",shape:"dot",text:yyyy+"."+mm+"."+dd+" "+hh+":"+mmm+":"+ss});

   
    msg.payload=(hh+":"+mmm+":"+ss)
    
    }else{
    
    msg.payload="Erro ao publicar";
    }

    return msg;
    
