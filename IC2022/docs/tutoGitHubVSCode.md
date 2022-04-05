# Integração VSCode e GitHub

Ao pesquisarmos sobre a O funcionamento do Git e do GitHub estão diretamente conectados. Mas, a primórdio, explicitando individualmente o funcionamento de cada um:

## Git
 É uma ferramenta de versionamento de arquivos, ou seja, temos um funcionamento “similar” ao do google docs, por exemplo, em que mais de uma pessoa pode trabalhar, ao mesmo tempo, em um mesmo projeto. Apesar da similaridade destas ferramentas, o Git tem algumas funcionalidades que se destacam, como a formação de uma linha temporal de alterações, ou seja, temos acesso à partes do projeto que já foram alteradas, ou mesmo apagadas, além da possibilidade de duas pessoas trabalharem no mesmo ponto de um arquivo, sem que uma interfira no serviço da outra, criando um nova linha cronológica.

## GitHub 
O GitHub é uma plataforma de hospedagem de código-fonte, nele pode-se contribuir juntamente com outros desenvolvedores em um mesmo código sem ter que se preocupar com a atualização do código, mantendo a versão que todos trabalham sempre atualizado.

Toda informação necessária para se usar o GitHub está no guia introdutório aqui:
[Introdução ao GitHub](https://docs.github.com/pt/get-started) 

## Integração do GitHub com o VSCode

### Pré-requisitos
- Visual Studio Code
- Git
- Conta no GitHub 

### Criando um Repositório no GitHub pelo VSCode

Para integrar o código produzido localmente no VSCode com o código no GitHub devemos primeiro abrir uma pasta para o projeto.

![pic1](/media/git/p1.png)

Então Clica-se em Controle do Código-Fonte na a lateral esquerda, e depois em publicar no GitHub, se não houver feito a sincronização do Git com a sua conta do GitHub uma página para logar com a sua conta do GitHub será aberta, após a sincronização é só publicar normalmente.

### Clonando um repositório no VSCode

Ao iniciar um novo projeto a partir de um repositório já existente, Clique F1 e escreva o comando: 
```
Git:Clone
```
Insira o URL do repositório a ser clonado, escolha uma pasta no seu computador para o projeto, e pronto.