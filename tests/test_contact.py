import unittest
import os
import json
from flask import jsonify


import flask_app


class TestContact(unittest.TestCase):
    """Tests the contact API."""

    def setUp(self):
        """Runs before each test method."""
        self.client = flask_app.create_app({'TESTING': True}).test_client()
        self.app_path = os.path.dirname(flask_app.__file__) + "/"
        self.current_log_data = ""
        with open(self.app_path + "logs/contact.txt", "r") as log:
            self.current_log_data = log.read()


    def tearDown(self):
        """Runs after each test method."""
        with open(self.app_path + "logs/contact.txt", "w") as log:
            log.write(self.current_log_data)


    def test_contact(self):
        """Tests the contact API."""

        # Normal (full) contact info
        test_data_normal = {
            "name": "Eratosthenes",
            "organization": "Library of Alexandria",
            "email": "bequietwhenyoure@thelibrary.please",
            "message": "Hey man – you want some primes for real cheap? I got some, real good, too – you don't need to know how – listen, don't worry about it man, totally safe – yeah, I promise – had some myself last week – alright, always happy to do business with you."
        }

        assert self.client.post(
            '/api/contact',
            json=test_data_normal
        ).get_json()["success"]


        # Normal (partially empty) contact data
        test_data_without_org = {
            "name": "Pierre de Fermat",
            "email": "pfermat@univ-orleans.fr",
            "message": "I have a wonderful message which the memory buffer of this process is too small to contain."
        }

        assert self.client.post(
            '/api/contact',
            json=test_data_without_org
        ).get_json()["success"]


        test_data_dirty_input = {
            "name": "\" raise Exception(\"We are Legion.\") #"
        }

        assert self.client.post(
            '/api/contact',
            json=test_data_dirty_input
        ).get_json()["success"]


if __name__ == '__main__':
    unittest.main()
