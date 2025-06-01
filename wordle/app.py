from flask import Flask, render_template, request, jsonify
from wordle import data, prio_letters, revise

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":

        data_received = request.get_json()
        clean_data = data(data_received)
        print("Cleaned")
        p = prio_letters()
        print("Letters returned")
        new_list = revise(clean_data, p)
        print("List ready!")
        response = {"message": "Data received", "received_data": new_list}

        return jsonify(response)

    return render_template('index.html')
