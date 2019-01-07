# Clear out the old build
cd flask_app
sudo rm -rf static templates

# Build the newest version
cd ..
sudo git pull
make init

# Restart the server
sudo service apache2 restart
