FROM nginx:alpine
COPY /nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY dist/starwars-service-client /usr/share/nginx/html
