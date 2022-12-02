<h1 align="center">API_Parking_JS</h1>

<p align="center">API que foi criada com o intuito de ser básica e simples de se fazer.</p>
<h4 align="center"> 
	 🚀 Concluido  
</h4>


* [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Ferramentas Usadas](#ferrramentas-usadas)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      
      
      
      ## tabela-de-conteudo
       A API consiste em um sistema de estacionamento. Onde o dono do local pode, adicionar carros e motos, remove-los e também lista-los.
      
      ## ferramentas-usadas
       [NodeJS](https://nodejs.org/en/) </br>
       [Express](https://expressjs.com/pt-br/) </br>
       [Insomnia](https://insomnia.rest/download) </br>
       [Nodemon](https://nodemon.io/) </br>
       
       
      ## como-usar
       No Insomnia, você deve enviar a seguite requisição:
                <b>{
                  "Name": "nome_do_cliente",
                  "Board": "placa_do_carro"
                }</b>
                
        Coloque a rota que deseja de acordo com o código.
        EX: localhost:3000/getCar => para trazer carros estacionados.
        
        Os métodos get, não são necessários passar o body.
        Apenas nos métodos post, delete.
        
        Em caso de dúvidas, pode entrar em contato. :)
      
