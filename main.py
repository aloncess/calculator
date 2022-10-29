from flask import Flask, jsonify
import flask
from random import randint
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/<int:num1>+<int:num2>')
def sums(num1, num2):
    return jsonify(num1 + num2)

@app.route('/<int:num1>-<int:num2>')
def subtract(num1, num2):
    return jsonify(num1 - num2)

@app.route('/<int:num1>:<int:num2>')
def division(num1, num2):
    return jsonify(num1 / num2)

@app.route('/<int:num1>*<int:num2>')
def multiply(num1, num2):
    return jsonify(num1 * num2)

if __name__ == '__main__':
    app.run(debug=True)