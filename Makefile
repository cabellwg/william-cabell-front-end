init:
	pip install virtualenv; \
	virtualenv -p python3.7 p3_7env --no-site-packages; \
	. ./p3_7env/bin/activate; \
	pip install -r requirements.txt
	cd vue_app; yarn build --modern

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

run:
	. ./p3_7env/bin/activate; \
	export FLASK_APP=flask_app; \
	flask run

.PHONY: init test dev run
