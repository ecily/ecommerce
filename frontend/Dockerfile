FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV REACT_APP_BASE_API_URL="http://localhost:4000"

CMD [ "npm", "start" ]