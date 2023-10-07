from flask import Flask, request, render_template

app = Flask(__name__)

# Lista de usuarios registrados (simulación de una base de datos)
registered_users = {"user1": "password1", "user2": "password2"}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if username in registered_users and registered_users[username] == password:
        return "Login exitoso!"
    else:
        return "Credenciales inválidas. Por favor, intente de nuevo."

if __name__ == '__main__':
    app.run(debug=True)