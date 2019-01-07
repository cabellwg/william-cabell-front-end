# Clear out the old build
cd flask_app
rm -rf static templates

# Build the newest version
cd ..
git pull
make init

# Restart the server
service apache2 restart
