FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html/
COPY .htpasswd /etc/nginx/.htpasswd