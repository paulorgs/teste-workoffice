# Aplicativo em Ionic 5 que consome uma API em Node + Express com autenticação JWT 

<h1> Intruções para a execução do Projeto  </h1>


<ul>
  <li>Executar o comando: "npm install" dentro da pasta backend </li>
   <li>Executar o comando: "npm install" dentro da pasta frontend </li>
   <li>
   Na seguinte linha, dentro do arquivo Index.js na Pasta Database, coloque o endereço do seu banco MongoDB: <br> <br>
   
   
  
    
       mongoose.connect('mongodb://ENDEREÇO/DO_SEU_BANCO', { useNewUrlParser: true, useUnifiedTopology: true }); 
    
   
    
  
  </li> <br> <br>
 
</ul>

<h2> Rotas </h2>

<ul>
   <li> POST-  localhost:3000/auth/register - Insere um usuário e retorna um objeto de usuário com um token de autenticação   </li>
   <li> POST - localhost:3000/auth/login - Realiza a verificação da existencia de usuário e caso ele exista
   e os dados estejam corretos é retornado um objeto de usuário + um token de autenticação </li>
   

  <li> GET-  localhost:3000/dogs - Retorna um objeto com a listagem de cachorros  </li>
   <li> POST - localhost:3000/dogs -Insere um registro de cachorro no banco  </li>
    <li> GET-  localhost:3000/cats - Retorna um objeto com a listagem de gatos  </li>
   <li> POST - localhost:3000/cats -Insere um registro de gato no banco  </li>
   <br <br> <br>
   
   <h3> Observações sobre o Token </h3>
     <ul>
      <li> Para mudar o tempo de expiração do token altere a seguinte função:

                function generateToken(params = {}){
                    return jwt.sign(params, authConfig.secret, {
                        expiresIn:86400,
                    });
                }
                
                
                
     
Na linha "expiresIn:86400" modifique o valor para o tempo que desejar ( o formato aceitado é em segundos) 
    </li>
     
  </ul>

 <h2> Formatos de Inserção  </h2>
 
      Para registar um usuário: <br>

      "_id": id ( númerico),
      "nome":"Nome",
      "sobrenome":"Sobrenome",
      "cidade":"Cidade",
      "estado":"estado" ,
      "email": "email@email",
      "senha": "senha",
      "fotoUrl":"url da foto "
	


 Para registar um gato/cão: <br>
 
        " _id": id numérico,
       "nome":"Nome",
        "sobrenome":"Sobrenome",
        "telefone":"telefone",
        "seguidores":"numero de seguidores",
        "projetos":"numero de projetos",
        "seguidos":"numero de pessoas seguidas",
        "cidade":"cidade",
        "estado":"estado",
        "fotoUrl":"url da foto"
  
