init:
	pip3 install virtualenv; \
	virtualenv -p python3.6 p3_6env --no-site-packages; \
	. ./p3_6env/bin/activate; \
	pip install -r requirements.txt
	cd vue_app; yarn && yarn build --modern
	-mkdir flask_app/logs
	-touch flask_app/logs/contact.txt
	-chmod 777 flask_app/logs/contact.txt

test:
	. ./p3_6env/bin/activate; \
	export ENV test; \
	python -m unittest discover -vcs tests

dev:
	. ./p3_6env/bin/activate; \
	export ENV dev; \
	export FLASK_APP=flask_app; \
	export FLASK_ENV=development; \
	flask run

run:
	. ./p3_6env/bin/activate; \
	export FLASK_APP=flask_app; \
	flask run

.PHONY: init test dev run
