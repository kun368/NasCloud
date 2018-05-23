FROM nginx:1.14
MAINTAINER codekun <www.zzkun.com>

ENV HTML_ROOT=/usr/share/nginx/html

COPY build /appsrc
RUN mv /appsrc/* $HTML_ROOT

EXPOSE 80
CMD nginx -g "daemon off;"
