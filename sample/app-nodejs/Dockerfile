FROM node:20-alpine
WORKDIR /app-nodejs
COPY . .
RUN yarn install --production
CMD [ "node",  "./src/index.js"]