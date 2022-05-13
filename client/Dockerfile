FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
#just for aws we write EXPOSE, it doesn't do anything on it's own
EXPOSE 8080   
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf  
COPY --from=builder /app/dist /usr/share/nginx/html
