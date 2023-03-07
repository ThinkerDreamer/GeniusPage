# syntax=docker/dockerfile:1

FROM python:3.9

WORKDIR /server
RUN pip install --upgrade pip
COPY  ./requirements.txt ./
RUN pip install -r requirements.txt

COPY . ./

EXPOSE 8080
CMD ["gunicorn", "--bind", ":8080", "wsgi:app"]
