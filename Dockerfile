FROM hayd/alpine-deno:1.0.1

EXPOSE 9000

ARG PORT

ENV PORT=$PORT

WORKDIR /app

USER deno
COPY . .
RUN deno cache app.js

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "app.js"]