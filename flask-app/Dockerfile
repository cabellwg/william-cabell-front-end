FROM python:3.7

WORKDIR /app

ADD . /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 80

ENV NAME "William Cabell"
ENV FLASK_ENV development

CMD ["python", "app.py"]
