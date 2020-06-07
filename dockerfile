FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./form-app-server/package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "server"]