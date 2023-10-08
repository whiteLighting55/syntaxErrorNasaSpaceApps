from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def template():
    return render_template()

@app.route('/username', methods = ['POST'])
def ussername():
    ussername = request.form['username']
    return "<h1>bienvenido" + ussername + "</h1>"

if __name__ =='__main__':
    app.run(debug=True)