Relatório: Desenvolvimento de Serviços REST com Node.js, MySQL e OpenAPI 3.0

Introdução
Este relatório descreve o desenvolvimento de uma camada de serviços REST utilizando Node.js, MySQL e OpenAPI 3.0. O trabalho foi realizado em colaboração com o docente, e os passos incluíram a definição do tema, preparação da base de dados, implementação da camada de serviços, e a documentação da API.

Passo 1: Definição do Tema
O tema escolhido para o trabalho foi a criação de uma aplicação web para gerenciamento de uma biblioteca. Os serviços REST foram desenvolvidos para permitir operações de CRUD em recursos como livros, autores, editoras e usuários.

Passo 2: Preparação da Base de Dados
Utilizamos MySQL como SGBD e preparamos tabelas para armazenar dados sobre livros, autores, editoras e usuários. Cada tabela foi preenchida com 30 registros para garantir um volume de dados suficiente.

Passo 3: Desenvolvimento da Camada de Serviços REST
Implementamos a camada de serviços REST utilizando Node.js. A arquitetura de serviços foi design-first, seguindo os princípios RESTful. Utilizamos pelo menos 4 verbos HTTP (CRUD) para operações nos recursos mencionados.

Passo 4: Requisitos Mínimos Obrigatórios
Arquitetura REST: Adotamos uma arquitetura RESTful para a exposição de serviços.
4 Verbos HTTP: Implementamos CRUD utilizando pelo menos 4 verbos HTTP.
4 Recursos Diferentes: Disponibilizamos serviços para livros, autores, editoras e usuários.
Relação 1:n: Estabelecemos uma relação de cardinalidade 1:n entre autores e livros.
JSON Representations: Os recursos são representados em JSON.
Documentação com OpenAPI 3.0: Documentamos a API utilizando o formato OpenAPI 3.0.
Postman Collection: Disponibilizamos uma Collection do Postman para consulta dos recursos.
MySQL como SGBD: Utilizamos MySQL para armazenar os dados.
Node.js como Servidor Aplicacional: Desenvolvemos a camada de serviços utilizando Node.js.
Configuração Multi-container: Foram disponibilizadas configurações para a execução multi-container (MySQL + NodeJs).
Valorização Adicional
Filtros via Parâmetros HTTP: Implementamos filtros para permitir consultas específicas através de parâmetros HTTP.
Relação m:n: Exploramos a relação de cardinalidade m:n entre editoras e livros.
Conclusão
O projeto atendeu aos requisitos mínimos obrigatórios, fornecendo uma camada de serviços RESTful robusta e bem documentada. Além disso, a implementação de funcionalidades adicionais, como filtros e relações m:n, demonstra a capacidade de ir além dos requisitos básicos.

Este relatório reflete o processo de desenvolvimento passo a passo, desde a definição do tema até a entrega de uma solução completa e funcional.
