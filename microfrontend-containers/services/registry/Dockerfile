FROM node:18

COPY . .

RUN cd /api \
  && npm i \
  && npm run build


CMD ["node", "/api/dist/index.js"]

