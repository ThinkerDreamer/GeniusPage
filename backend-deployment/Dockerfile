# syntax=docker/dockerfile:1

FROM python:3.9-slim-bullseye

WORKDIR /backend
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN pip install --upgrade pip
COPY  requirements.txt .
RUN pip install -r requirements.txt

COPY . ./

EXPOSE 8080
CMD ["gunicorn", "--timeout", "1000", "--bind", ":8080", "wsgi:app"]
