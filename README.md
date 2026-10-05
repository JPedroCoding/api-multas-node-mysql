# API de Multas

API REST de CRUD de multas de trânsito — projeto de estudo com Node.js, Express, MySQL e Docker.

## Stack
- Node.js + Express
- MySQL 8 (driver mysql2)
- Docker + Docker Compose

## Funcionalidades
- CRUD completo de multas (criar, listar, buscar por id, mudar status, excluir)
- Front simples (lista, busca e mudança de status) consumindo a própria API
- API e banco rodando em containers, sobem com um comando

## Como rodar
Pré-requisito: Docker Desktop instalado e rodando.

\`\`\`bash
git clone https://github.com/JPedroCoding/api-multas-node-mysql.git
cd api-multas-node-mysql
docker compose up -d --build
\`\`\`

Depois abra http://localhost:3000 — a tabela e os dados de exemplo são criados automaticamente.

## Endpoints
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | /multas     | Lista todas as multas |
| GET    | /multas/:id | Busca uma multa por id |
| POST   | /multas     | Cria uma multa |
| PATCH  | /multas/:id | Atualiza o status |
| DELETE | /multas/:id | Exclui uma multa |

## Observação
Projeto de estudo para praticar backend: HTTP, CRUD, SQL e Docker.