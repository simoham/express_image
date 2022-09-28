FROM alpine:3.15

RUN mkdir -p /app
COPY . /app
RUN apk add nodejs npm
RUN cd /app && npm install

WORKDIR /app
expose 8080

CMD ["node", "/app/main.js"]
