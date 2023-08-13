# TaskPlanner Backend - API de Gerenciamento de Tarefas

O TaskPlanner Backend é a API construída com Node.js e Express que suporta o aplicativo de gerenciamento de tarefas TaskPlanner. Esta API fornece endpoints para criar, recuperar, atualizar e excluir tarefas.

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto.

2. Adicione as variáveis de ambiente necessárias para conectar-se ao AWS Secrets Manager:
    ```
    AWS_SECRET_NAME=seu-nome-de-secret
    AWS_REGION=sua-regiao
    ```
    Certifique-se de substituir `seu-nome-de-secret` pelo nome do seu segredo no AWS Secrets Manager e `sua-regiao` pela região onde seu segredo está armazenado.

3. No AWS Secrets Manager, crie um segredo com as seguintes chaves de configuração para o banco de dados:
- username
- password
- engine
- host
- port
- dbname
- dbInstanceIdentifier


## Executando o Projeto

Siga estas etapas para executar o projeto TaskPlanner Backend em sua máquina local:

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/SeuUsuarioAqui/taskplanner-backend.git
    cd taskplanner-backend
    ```

2. **Instale as dependências**:
    ```
    npm install
    ```

3. **Inicie o servidor**:
    ```
    npm start
    ```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de tempo de execução JavaScript.
- **Express**: Framework para construir aplicativos web com Node.js.
- **AWS Secrets Manager**: Serviço da AWS para gerenciar informações confidenciais, como chaves de banco de dados.

## Contribuição

Contribuições são bem-vindas! Se você quiser colaborar com melhorias, correções de bugs ou adição de novos recursos, fique à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://github.com/PedroTeixeiraa/taskplanner-api/blob/master/LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou precisar de suporte, sinta-se à vontade para entrar em contato via email: pedroteixeiraalves007@gmail.com.