# !/usr/bin/python
# -*- coding: utf-8 -*-

import datetime
import smtplib
import json

def add_contact(contact):
    name = contact["name"]
    org = contact["organization"]
    email = contact["email"]
    msg = contact["message"]

    # Construct message
    text  = "+===========================\n+\n+ "
    text += str(datetime.datetime.utcnow()) + "\n+ "
    text += "Name: "         + name  + "\n+ "
    text += "Organization: " + org   + "\n+ "
    text += "Email: "        + email + "\n+ "
    text += "––––––––––––––––––––––––––\n+ "
    text += "Message: "      + msg   + "\n+ "
    text += "\n+\n+===========================\n"


    # Write to log
    with open("logs/contact.txt", "r") as original: data = original.read()
    with open("logs/contact.txt", "w") as modified: modified.write(text + data)

    # Get Gmail login
    with open(".auth_keys.json") as auth:
        auth_dict = json.load(auth)

        # Notify me
        send_email(from_addr="william16180@gmail.com",
                   to_addr_list=["william16180@gmail.com"],
                   cc_addr_list=[],
                   subject="Someone actually used the form!",
                   message=text,
                   login=auth_dict["gmail"]["username"],
                   password=auth_dict["gmail"]["password"])

# Shamelessly stolen from http://rosettacode.org/wiki/Send_email#Python
def send_email(from_addr, to_addr_list, cc_addr_list,
               subject, message,
               login, password,
               smtpserver='smtp.gmail.com:587'):
    header  = 'From: %s\n' % from_addr
    header += 'To: %s\n' % ','.join(to_addr_list)
    header += 'Cc: %s\n' % ','.join(cc_addr_list)
    header += 'Subject: %s\n\n' % subject
    message = header + message

    server = smtplib.SMTP(smtpserver)
    server.starttls()
    server.login(login,password)
    problems = server.sendmail(from_addr, to_addr_list, message)
    server.quit()
    return problems
