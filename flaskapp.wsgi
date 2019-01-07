#!/usr/bin/python

activate_this = './p3_7env/bin/activate_this.py'
with open(activate_this) as file:
    exec(file.read(), dict(__file__=activate_this))

import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/flask-app")

from flask_app import app as application
