FROM nginx:latest
WORKDIR /app

COPY ./dist /app

ADD ./nginx.site.conf /etc/nginx/conf.d/site.conf

EXPOSE 8080

RUN service nginx restart


