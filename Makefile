init:
	pip3 install virtualenv; \
	echo "2\n" >> log; \
	virtualenv -p python3.6 p3_6env --no-site-packages; \
	echo "3\n" >> log; \
	. ./p3_6env/bin/activate; \
	echo "4\n" >> log; \
	pip install -r requirements.txt
	echo "5\n" >> log
	cd vue_app; yarn && yarn build --modern
	echo "6\n" >> log
	-mkdir flask_app/logs
	echo "7\n" >> log
	-touch flask_app/logs/contact.txt

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
