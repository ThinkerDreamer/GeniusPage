#!/bin/sh
gunicorn --bind [::]5000 wsgi:app