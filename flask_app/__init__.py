import os
import socket


from flask import Flask, jsonify, request, render_template
from flask_cors import CORS, cross_origin


from flask_app.main.services import contact
from flask_app.main.services import continuous_deployment


# No collisions with Vue.js bindings
class TemplateFix(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        variable_start_string="%%",
        variable_end_string="%%"
    ))


def create_app(test_config=None):
    # Setup
    app = Flask(__name__)

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    CORS(app, resources={r"/api/*": {"origins": r"williamcabell.me/*"}})
    app = TemplateFix(__name__)

    # Routes
    @app.route("/")
    @app.route("/projects")
    @app.route("/resume")
    @app.route("/contact")
    def serve_app():
        return render_template("index.html")


    @app.route("/api/contact", methods=["POST"])
    @cross_origin(allow_headers=['Content-Type'])
    def contacted():
        contact.add_contact(request.get_json())
        return jsonify({"success" : True})


    @app.route("/api/cd", methods=["POST"])
    def continuously_deploy():
        continuous_deployment.reload()
        return b"Rebuilding application", 202


    @app.errorhandler(404)
    def page_not_found(e):
        return render_template("index.html"), 404


    return app


# Run
if __name__ == "__main__":
    app.run()
