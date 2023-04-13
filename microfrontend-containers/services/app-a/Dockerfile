FROM node:18

COPY . .

RUN cd frontend \
  && npm --prefix ./static-server install ./static-server \
  && npm i \ 
  && npm run build

ENTRYPOINT [ "node",  "frontend/init-http-server.js" ]
CMD [ "--dir", "frontend/dist" ]