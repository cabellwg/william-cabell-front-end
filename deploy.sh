# Clear out the old build
cd flask_app
sudo rm -rf static templates

# Build the newest version
cd ..
touch log
sudo git pull
echo "1\n" >> log
sudo make init
echo "8\n" >> log

# Restart the server
sudo service apache2 restart

echo "9\n" >> log
