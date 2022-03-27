<h1 align="center">
    <img alt="mural digital" src="images/logo.png" height="320px" /> <br /> <br />
    Sistema de Cadastro de Anúncio - NodeJS
</h1>

<p align="center">
  <img alt="Client" src="https://img.shields.io/badge/client-iBlue-blue" />
  <img alt="GitHub" src="https://img.shields.io/badge/license-MIT-%2397CA00" /> 
  <img alt="Made by JutaiCS" src="https://img.shields.io/badge/made%20by-JutaiCS-red" /> <br />
</p> 

<br /><br />

## :bookmark: O problema

A empresa XYZ, decidiu criar uma página para atender a demanda de anúcios para um mural on-line, com o objetivo de 
acabar com o uso de post-it e caneta.

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

O sistema está dividido em: Lorem Ipsum is simply dummy.


<br />

## :wrench: Configurando o projeto
<br />

Para utilizar o sistema, será necessário criar um banco de dados no Mysql.
Seguem scripts:

CREATE DATABASE portal_noticias;

-- portal_noticias.noticias definition

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into 
electronic typesetting, remaining essentially unchanged. 


<br />

## :sparkles: Protótipo do site
<br />

O site tem as seguintes telas:

<p align="center">
  <img alt="cadastro-anuncio" src="images/news.png" margin-right="20px" /><br />

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

