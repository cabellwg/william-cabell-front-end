from flask import Flask, jsonify, request, render_template
import os
import socket

app = Flask(__name__)

class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        variable_start_string='%%',  # Default is '{{', I'm changing this because Vue.js uses '{{' / '}}'
        variable_end_string='%%',
    ))

app = CustomFlask(__name__)

@app.route("/")
def serve_app():
    return render_template("index.html")

# @app.route("/api/contact", methods=["POST"])
# def contacted():
#     # try:
#     #     msg = Message('Subject', recipients = ['william16180@gmail.com'])
#     #     print(msg)
#     #     msg.body = "Hello Flask message sent from Flask-Mail"
#     #     msg.html = "<b>TESTING HTML TAG</b>"
#     #     mail.send(msg)
#     # except Exception as e:
#     #     raise e
#     return "Hi"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
