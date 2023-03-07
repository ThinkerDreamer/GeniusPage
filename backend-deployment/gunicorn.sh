#!/bin/sh
gunicorn --bind [::]8080 wsgi:app