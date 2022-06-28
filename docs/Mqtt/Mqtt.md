# Mosquitto (Mqtt)

O mosquitto é o protocolo responsável por fazer a comunicação de redes dos dispositivos conectados à mesma. A melhor maneira de explicar o funcionamento do protocolo mqtt é a partir da imagem abaixo.

![pic](/media/git/mqtt/meio.png)

A imagem acima se refere à uma representação de como funcionaria um sistema de censores, interruptores e central se comunicando, sem o protocolo Mqtt. Assim, a dificuldade de comunicação entre os dispositivos é nítida. 

A atuação do protocolo Mqtt, é, basicamente, uma forma para organizar e ordenar os dispositivos conectados à rede. O funcionamento do mesmo é baseado em um sistema de "Publisher" e "Subscriber",  em que temos os "emissores" e "receptores" de comandos e mensagens. A imagem abaixo faz referência à utilização do protocolo na rede da primeira imagem.

![pic](/media/git/mqtt/quaseUM.png)

## Instalação

Para a instalação do Mqtt, basta sequir os passos abaixo:

- Inicialmente, faça o download do instalador no [link](https://mosquitto.org/download/)
- Após o download, ao executar, siga os passos abaixo:

- ![pic](/media/git/mqtt/um.png)

- ![pic](/media/git/mqtt/dois.png) 

- ![pic](/media/git/mqtt/tres.png) 

- ![pic](/media/git/mqtt/quatro.png) 


### Configuração

No Windows, para iniciar o mosquitto com um determinado arquivo de configuração, dentro da pasta do mosquitto, deve-se usar o seguinte comando:

```
mosquitto -c "arquivoconfig.conf" -h "ip ou url" -p "porta" -v
```
É importante que o aqruivo deve estar dentro da pasta do mosquitto ou subistituir o nome do arquivo pelo endereço completo do arquivo (como C:/Users/usuario/arquivo.conf)

Nesse arquivo pode ser configurado todo o comportamento do mosquitto, um exemplo de configuração é o que permite acesso sem autenticação e que pode ser acessado na porta pardão (1883), nesse caso o conteudo do arquivo de configuração pode ser:
```
allow_anonymous true
listener 1883
```

### Referências e recomendações:

- Página principal do protocolo Mqtt [link](https://mqtt.org/)

- Pagina de recomendação com algumas referências [link](https://mosquitto.org/)
- Vídeo referência de explicação [link](https://www.youtube.com/watch?v=-GCb6aRGotE&t=207s&ab_channel=LNPBR)

- Recomendações de leitura para aprofundamento[link](https://mqtt.org/getting-started//)
