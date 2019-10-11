//Importar o restify
var restify = require('restify')

//Função exibir
//Requisição que o usuário fez para API
//Response que é a resposta que vai ser enviada
//Next para indicar pro servidor, que a função terminou 
function exibirRestaurantes(req, res, next) {
  //Criar um objeto mensagem onde dentro do objeto
  //Vai ser definido o texto, que vai ser o que vai retornar a quem acessar o endpoint
  var ofertas = [
    {
      "id": 1,
      "categoria": "restaurante",
      "titulo": "Super Burger",
      "descricao_oferta": "Rodízio de Mini-hambúrger com opção de entrada.",
      "anunciante": "Original Burger",
      "valor": 29.9,
      "destaque": true,
      "imagens": [
        {
          "url": "/assets/ofertas/1/img1.jpg"
        },
        {
          "url": "/assets/ofertas/1/img2.jpg"
        },
        {
          "url": "/assets/ofertas/1/img3.jpg"
        },
        {
          "url": "/assets/ofertas/1/img4.jpg"
        }
      ]
    },
    {
      "id": 2,
      "categoria": "restaurante",
      "titulo": "Cozinha Mexicana",
      "descricao_oferta": "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      "anunciante": "Mexicana",
      "valor": 32.9,
      "destaque": true,
      "imagens": [
        {
          "url": "/assets/ofertas/2/img1.jpg"
        },
        {
          "url": "/assets/ofertas/2/img2.jpg"
        },
        {
          "url": "/assets/ofertas/2/img3.jpg"
        },
        {
          "url": "/assets/ofertas/2/img4.jpg"
        }
      ]
    },
    {
      "id": 3,
      "categoria": "restaurante",
      "titulo": "Pizzas Grandes",
      "descricao_oferta": "Pizza Grande, Mussarela, Marguerita ou outras!",
      "anunciante": "Nossa Pizza",
      "valor": 21.9,
      "destaque": false,
      "imagens": [
        {
          "url": "/assets/ofertas/3/img1.jpg"
        },
        {
          "url": "/assets/ofertas/3/img2.jpg"
        },
        {
          "url": "/assets/ofertas/3/img3.jpg"
        },
        {
          "url": "/assets/ofertas/3/img4.jpg"
        }
      ]
    },
    {
      "id": 4,
      "categoria": "diversao",
      "titulo": "Estância das águas",
      "descricao_oferta": "Diversão garantida com piscinas, trilhas e muito mais.",
      "anunciante": "Estância das águas",
      "valor": 31.9,
      "destaque": true,
      "imagens": [
        {
          "url": "/assets/ofertas/4/img1.jpg"
        },
        {
          "url": "/assets/ofertas/4/img2.jpg"
        },
        {
          "url": "/assets/ofertas/4/img3.jpg"
        },
        {
          "url": "/assets/ofertas/4/img4.jpg"
        },
        {
          "url": "/assets/ofertas/4/img5.jpg"
        },
        {
          "url": "/assets/ofertas/4/img6.jpg"
        }
      ]
    },
    {
      "id": 5,
      "categoria": "diversao",
      "titulo": "Kart",
      "descricao_oferta": "Bateria de Kart de 30 minutos.",
      "anunciante": "Speed Kart",
      "valor": 54.9,
      "destaque": false,
      "imagens": [
        {
          "url": "/assets/ofertas/5/img1.jpg"
        },
        {
          "url": "/assets/ofertas/5/img2.jpg"
        }
      ]
    },
    {
      "id": 6,
      "categoria": "diversao",
      "titulo": "Academia de tiro",
      "descricao_oferta": "Sessão de tiro dinâmico com Instrutor, Estande, Alvo e Equipamentos.",
      "anunciante": "Academia de Tiro",
      "valor": 89.9,
      "destaque": false,
      "imagens": [
        {
          "url": "/assets/ofertas/6/img1.jpg"
        },
        {
          "url": "/assets/ofertas/6/img2.jpg"
        }
      ]
    }
  ]

  res.json(ofertas)
  //Indicar para o restify que a função terminou de ser executada
  //E liberar o cursor para próxima execuções
  next();
}

//Configurar o servidor
var server = restify.createServer({
  name: 'BackendUrbano'
});

//Subindo o servidor, fazendo ele rodar
server.listen(5000, function () {
  //Função que vai ser executada assim que o servidor rodar
  console.log('%s sendo executado!', server.name)
})

//Criando os endpoint
// http://localhost:5000/restaurantes => chamar a função exibirRestaurantes
server.get('/restaurantes', exibirRestaurantes);

//Rotas a serem criadas:
//ofertas, como-usar, onde-fica, pedidos