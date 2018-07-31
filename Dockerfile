ARG port=4000

FROM node

WORKDIR /app/ritual

COPY . /app/ritual

ENV NPM_CONFIG_LOGLEVEL info

RUN npm install

RUN npm run build:ssr

EXPOSE ${port}

ENV PORT=${port}
ENV NODE_ENV=production

CMD [ "node", "dist/server.js" ]
