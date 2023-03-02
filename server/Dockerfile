# syntax=docker/dockerfile:1

FROM python:3.9

WORKDIR /server
RUN pip install --upgrade pip
COPY  ./requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./
RUN chmod 777 ./gunicorn.sh

EXPOSE 5000
ENTRYPOINT ["./gunicorn.sh"]
