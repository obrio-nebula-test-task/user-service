### How to start the project

## dev

**Create and fill .env file like in `.env.example`**

Env:

```
docker compose -f docker-compose.development.yaml build
docker compose -f docker-compose.development.yaml up
npm run start:dev
```

Prod:

```
docker compose -f docker-compose.development.yaml build
docker compose -f docker-compose.development.yaml up
npm run build
npm run start
```
**Start the Notification service**
