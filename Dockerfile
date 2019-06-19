FROM nginx:1.17-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
