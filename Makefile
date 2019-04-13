init:
	pip3 install virtualenv; \
	virtualenv -p python3.7 p3_7env --no-site-packages; \
	. ./p3_7env/bin/activate; \
	pip install -r requirements.txt
	cd vue_app; yarn && yarn build --modern
	-mkdir flask_app/logs
	-touch flask_app/logs/contact.txt
	-chmod 666 flask_app/logs/contact.txt

test:
	. ./p3_7env/bin/activate; \
	export ENV test; \
	python -m unittest discover -vcs tests

dev:
	. ./p3_7env/bin/activate; \
	export ENV dev; \
	export FLASK_APP=flask_app; \
	export FLASK_ENV=development; \
	flask run

.PHONY: init test dev
