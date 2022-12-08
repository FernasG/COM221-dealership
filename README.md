# COM221 - Dealership

![alt last commit](https://img.shields.io/github/last-commit/FernasG/COM221-dealership?style=flat-square)

Sistema de gerenciamento de concessionária, o site permite manter veículos, usuários e estoque de veículos, sendo possível cadastrar usuários para serem notificados quando o estoque de um veículo de seu interesse foi alterado. Além de permitir ao proprietário da concessionária gerar o valor do IPVA de sua frota.

## Instalação

### Configuração de Ambiente

Para rodar o projeto é necessário instalar o `Docker`, `Docker-Compose` e `Make`.

- Manual de instalação do [Docker](https://docs.docker.com/engine/install/), [Docker-Compose](https://docs.docker.com/compose/install/) e [Make](https://cmake.org/install/);

### Variáveis de Ambiente

O módulo de notificação do sistema envia e-mails aos usuários e usamos o [Simple Email Service](https://aws.amazon.com/pt/ses/) da AWS, portanto é preciso ter uma conta na [AWS](https://aws.amazon.com/) e gerar as credenciais para utilizar seus serviços.

1. Renomeie o arquivo `.env.example` para `.env`;
2. Ao abrir o arquivo insira nos campos com prefixo `AWS` as suas credenciais das AWS.
3. No campo `SOURCE_EMAIL` você deve inserir a conta que vai enviar os e-mails para os usuários.

OBS: para um configuração mais simples é possível remover o trecho que faz o envio de e-mails, tirando a necessidade de ter uma conta na AWS.

### Hosts

É recomendado fazer um mepeamento do `localhost` da máquina para uma URL mais legível.

Linux:
1. Abra o terminal e execute o comando:
```
sudo nano /etc/hosts
```
2. Com o arquivo aberto digite:
```
127.0.0.1 dealership
```
3. Use o atalho <kbd>CTRL</kbd>+<kbd>O</kbd> para salvar e <kbd>CTRL</kbd>+<kbd>X</kbd> para fechar o arquivo.

Windows:
- Você pode seguir o tutorial do [Tecnoblog](https://tecnoblog.net/responde/editar-arquivo-hosts-windows/) para alterar o _hosts_.

### Execução

Com o ambiente configurado abra o terminal na raiz do projeto e execute o comando:
```
make up
```
Esse comando fará o _build_ do projeto, após finalizar você verá a seguinte mensagem no terminal:
```
Server running: http://dealership or http://localhost:80
```
Você pode acessar qualquer um dos links acima para começar a usar a plataforma.