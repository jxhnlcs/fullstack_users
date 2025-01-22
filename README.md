# Tela de Listagem de Usuários

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado e configurado.

## Documentação de Como Rodar

Siga as instruções abaixo para executar o sistema em sua máquina local.

### Como Clonar o Repositório

Siga os passos abaixo para clonar o repositório e preparar o ambiente:

1. Abra o terminal e navegue até o diretório onde deseja clonar o repositório.

2. Execute o comando abaixo para clonar o repositório:
```bash
git clone https://github.com/jxhnlcs/fullstack_users.git
```

### Após Clonar o Repositório

1. Abra dois novos terminais

### Configuração do Backend

1. Navegue até a pasta do backend:

```bash
cd api
```

2. Insira os dados do banco de dados no arquivo db.js, localizado na pasta models:

```bash
const db = mysql.createConnection({
  host: '127.0.0.1', // Endereço do servidor do banco de dados
  user: 'root',      // Usuário do banco de dados
  password: 'root',  // Senha do banco de dados
  database: 'usuarios', // Nome do banco de dados
  port: 3306         // Porta do MySQL
});
```

3. Instale as dependências do servidor:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm start
```

- A API estará rodando na porta: 3333.

### Configuração do Frontend

1. Navegue até a pasta do frontend:

```bash
cd web
```

2. Instale as dependências do servidor:

```bash
npm install
```

3. Inicie o servidor Vue.js:

```bash
npm run serve
```

- O sistema estará disponível na porta 8080 no seu navegador.

## Tecnologias Utilizadas

- Vue.js
- Node.js
- Express
- MySQL
- Docker
