FROM node:18-alpine

RUN mkdir /frontend
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json

RUN yarn
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
