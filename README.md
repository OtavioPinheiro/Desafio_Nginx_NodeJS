# Desafio FullCycle Docker-compose :whale:
## Nginx + NodeJS + MySQL
O desafio consiste em criar uma imagem Nginx como proxy reverso e quando o usuário acessa-la na 8080, o Nginx fará uma chamada para a aplicação NodeJS. O NodeJS por sua vez adicionará um registro no banco de dados MySQL, cadastrando um nome na tabela.

## Execução :rocket:
Para executar esse projeto, após ter realizado o `git clone`:
1. `docker-compose up -d`
2. Abrir o *browser* em `localhost:8080`
