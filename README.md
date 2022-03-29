<h1 align="center">
    <img alt="mural digital" src="app/public/images/logo.png" height="320px" /> <br /> <br />
    Sistema de Cadastro de Anúncio - NodeJS
</h1>

<p align="center">
  <img alt="Client" src="https://img.shields.io/badge/client-iBlue-blue" />
  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-%2397CA00" /> 
  <img alt="Made by JutaiCS" src="https://img.shields.io/badge/made%20by-JutaiCS-red" /> <br />
</p> 

<br /><br />

## :bookmark: O problema

A empresa XYZ, decidiu criar uma página para atender a demanda de anúcios para um mural on-line, com o objetivo de acabar com o uso de insumos.

<br />

## :bulb: A idéia

Depois de um alinhamento com a gestão, foi decidido criar uma tela para poder exibir os anúncios no painel de noticias.

<br />

## :computer: Tenologias Utilizadas

O projeto é muito simples e conta com as seguintes tecnologias:
<br />

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Mysql](https://www.mysql.com/)

<br />

## :package: Funcionamento do sistema
<br />

O sistema está dividido em: 

- Tela de Cadastro
- Tela de Visualização de Notícias
- Tela de Visualização de Notícia por item selecionado na grid


<br />

## :wrench: Configurando o projeto
<br />

Para utilizar o sistema, será necessário criar um banco de dados no Mysql.
<br />
Seguem scripts:

Banco de Dados:
```sql
CREATE DATABASE portal_noticias;
```

Tabela Notícias:
```sql
CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
);
```


<br />

## :sparkles: Protótipo do site
<br />

O site tem as seguintes telas:

<p align="center">
  <img alt="cadastro-anuncio" src="app/public/images/logo.png" margin-right="20px" /><br />

</p>

<br />

## :memo: License

[MIT license](LICENSE) for more details
<br />
<br />

## :wave: Social

Me siga Jutai C.S nas redes Sociais :wink:
<br />

- [Instagram](https://www.instagram.com/jutaics/)
- [LinkedIn](https://www.linkedin.com/in/jutai-de-carvalho-santos-92483b27/)

