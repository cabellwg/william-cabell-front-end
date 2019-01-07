#!/bin/bash

# All hail the mighty StackOverflow
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

# Clear out the old build
cd flask_app
sudo rm -rf static templates

# Build the newest version
cd ..

sudo git pull
sudo make init

# Restart the server
sudo service apache2 restart
