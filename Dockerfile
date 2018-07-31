ARG port=4000

FROM node

WORKDIR /app/ritual

COPY . /app/ritual

RUN npm install

ENV NODE_ENV=production

RUN npm run build:ssr

EXPOSE ${port}

ENV NPM_CONFIG_LOGLEVEL info
ENV PORT=${port}

CMD [ "node", "dist/server.js" ]
