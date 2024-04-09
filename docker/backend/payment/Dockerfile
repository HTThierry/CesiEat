FROM node:latest AS base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

FROM base AS development


RUN npm install -g nodemon

COPY . .

EXPOSE 3006

CMD ["nodemon", "index.js"]


FROM base AS production

COPY . .


EXPOSE 3006

CMD ["node", "index.js"]
