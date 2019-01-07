import datetime
import smtplib
import json
import os

def add_contact(contact):
    name = contact["name"] or ""
    org = contact["organization"] or ""
    email = contact["email"] or ""
    msg = contact["message"] or ""

    # Construct message
    text  = "+===========================\n+\n+ "
    text += str(datetime.datetime.utcnow()) + "\n+ "
    text += "Name: "         + name  + "\n+ "
    text += "Organization: " + org   + "\n+ "
    text += "Email: "        + email + "\n+ "
    text += "---------------------------\n+ "
    text += "Message: "      + msg   + "\n+ "
    text += "\n+\n+===========================\n"

    # Write to log
    with open("logs/contact.txt", "r") as original:
        data = original.read()
    with open("logs/contact.txt", "w") as modified:
        modified.write(text + data)
