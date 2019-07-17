# Burger Queen - API com Node.js
Exercício proposto para conhecimento e estudo da parte de Back-end da Laboratoria.

## Preâmbulo
Um pequeno restaurante de hambúrgueres, que está crescendo, precisa de um
sistema através do qual ele possa receber pedidos usando e enviá-los
para a cozinha para que eles sejam preparados de forma eficiente.

A ideía é desenvolvermos uma API que possa ser integrada com uma interface (futuramente).

## Resumo do projeto

Por uma API, neste caso, nos referimos a um _servidor web_, que é
basicamente um programa que _escuta_ uma porta de rede, através da qual
podemos enviar _requisições_ (_request_) e obter _respostas_ (_response_).

Um servidor web deve _gerenciar_ as requisições recebidas e produzir respostas àquelas
requisições que serão enviadas de volta para o _cliente_. Quando falamos sobre
_aplcações de servidor_, isso implica uma arquitetura _cliente / servidor_,
onde o cliente é o programa que faz as requisições através de uma rede (por
exemplo, o navegador, cURL, etc), e o _servidor_ é o programa que recebe
essas requisições e respostas.

O [Node.js](https://nodejs.org/) nos permite criar servidores Web super eficientes
de uma forma relativamente simples, tudo isso usando JavaScript!

A cliente nos deu um [link para a documentação](https://documenter.getpostman.com/view/1721181/RWgozeom)
que especifica o comportamento esperado da API que iremos disponibilizar por 
HTTP. Lá você pode encontrar todos os detalhes de quais _endpoints_ você deve 
implementar na aplicação, quais parâmetros são esperados, o que eles devem 
responder, etc.

## 3. Objetivos de aprendizagem

O principal objetivo de aprendizagem é ganhar experiência com o **Node.js**
como uma ferramenta para desenvolver _aplicações de servidores_, junto com uma
série de ferramentas comuns usadas neste tipo de contexto (Express como
framework, MongoDB ou MySQL como banco de dados, ferramentas de autenticação, 
etc).

Neste projeto você irá construir um servidor web que deve _servir_ `JSON`
via `HTTP` e implementá-lo em um servidor na nuvem.

Para completar o projeto, você terá que se familiarizar com conceitos como
**rotas** (_routes_), **URLs**, **HTTP** e **REST** (verbs, request, response, headers,
body, status codes...), **JSON**, **conexão com um banco de dados**, **variáveis de ambiente**, **deployment**, etc.
