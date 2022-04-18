# Hello World MQTT


## Breve explicação sobre o funcionamento do Publisher e Subscriber:
Ao final da explicação, quando ocorrer a prática do servidor, ficará mais claro a atuação de ambos. Resumidamente, tem-se que, ao iniciar o protocolo (primeiro comando utilizado), ocorrerão as duas atuações, acima citadas. A atuação do Subscriber é, basicamente, receber as informações publicadas no tópico em que o mesmo foi cadastrado (segundo comando utlizado). A dualidade do Subscriber, o Publisher, é responsável por enviar as informações em um tópico específico (terceiro comando utilizado). Assim, enquanto o Publisher é responsável por enviar informações, o Subscriber é por recebe-las. 

## Servidor MQTT 

Para o primeiro "Hello World" no Mqtt, o teste do servidor será feito. Basta acompanhar os sequintes passos:

- Iniciar o prompt de comando e fazer o direcionamento do diretório para a pasta em que o Mqtt está salvo:

  - ##### A alteração do diretório é feita com comando "cd" no prompt. Para "apagar" o diretório ja setado, basta colocar "cd.." ou "cd\"
  ![pic](/media/git/Mqtt/MqttHW/dois.png)

- O mesmo é feito em mais dois prompts, para que a atuação do protocolo fique mais visível no servidor.

- Assim, quando ambas estiverem prontas, os seguintes comandos serão utilizados:
  - Inicializar o broker: mosquitto
  - Comando para inscrever: mosquitto_sub -v -t 'NomeDoTopicoCadastrado'
  - Comando para publicar: mosquitto_pub -t 'NomeDoTopicoCadastrado' -m 'HelloWorld'

  ![pic](/media/git/Mqtt/MqttHW/tres.png)     Expicação das imagens: No prompt debaixo, ocorreu a inicialização do broker, que foi também utilizado como Publisher, em seguida. No prompt da parte superior direita um Publisher. No prompt da parte superior esquerda, um Subscriber.






### Referências e recomendações:

 -Desenvolvimento do servidor [link](https://stackoverflow.com/questions/26716279/how-to-test-the-mosquitto-server)
