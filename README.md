### How to start the project

## dev

**Create and fill .env file like in `.env.example`**

Node version: 22.11.0

Env:

```
docker compose -f docker-compose.development.yaml build
docker compose -f docker-compose.development.yaml up
npm install
npm run start:dev
```

Prod:

```
docker compose -f docker-compose.development.yaml build
docker compose -f docker-compose.development.yaml up
npm install
npm run build
npm run start
```
**Start the Notification service**
