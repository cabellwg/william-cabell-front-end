FROM python:3.7-alpine

RUN apk add --no-cache \
        bash \
        make \
        linux-headers \
        g++ \
        pcre \
        pcre-dev \
        nodejs \
        nodejs-npm \
        yarn

COPY . /app
WORKDIR /app

RUN make init

ENTRYPOINT /app/p3_7env/bin/uwsgi --ini /app/uwsgi/williamcabell.ini
