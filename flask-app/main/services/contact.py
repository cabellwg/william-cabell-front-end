import datetime

def add_contact(contact):
    name = contact["name"]
    org = contact["organization"]
    email = contact["email"]
    msg = contact["message"]

    text  = "+===========================\n+\n+ "
    text += str(datetime.datetime.utcnow()) + "\n+ "
    text += "Name: "         + name  + "\n+ "
    text += "Organization: " + org   + "\n+ "
    text += "Email: "        + email + "\n+ "
    text += "––––––––––––––––––––––––––\n+ "
    text += "Message: "      + msg   + "\n+ "
    text += "\n+\n+===========================\n"

    with open('logs/contact.txt', 'r') as original: data = original.read()
    with open('logs/contact.txt', 'w') as modified: modified.write(text + data)
