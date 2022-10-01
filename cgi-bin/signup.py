import cgi
import csv

form = cgi.FieldStorage()

name = form.getvalue('name')
email = form.getvalue('email')
password = form.getvalue('password')

data = [name, email, password]

with open('users.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(data)
    