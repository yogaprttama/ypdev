FROM node:16.18.1-alpine

RUN apk update && apk add ca-certificates && update-ca-certificates

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN npm update

EXPOSE 3000

CMD ["npm", "start"]
