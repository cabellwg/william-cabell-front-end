import subprocess
import os
import flask_app


def reload():
    path = os.path.dirname(flask_app.__file__) + "/../"
    subprocess.call(path + "deploy.sh")
