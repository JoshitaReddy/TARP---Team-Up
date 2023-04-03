from load_model import predict
from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/', methods=['GET'])
def predict_get():
    v =  predict(request.args)
    return jsonify(prediction=str(v[0]))

if __name__ == "__main__":
    app.run(debug=True)
