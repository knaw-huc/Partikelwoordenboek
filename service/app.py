from flask import Flask, request, jsonify
from flask_cors import CORS
from elastic_index import Index
import os


# config = {
#     "url" : "sport-elastic",
#     "port" : "9200",
#     "doc_type" : "sport"
# }

app = Flask(__name__, static_folder='browser', static_url_path='')

CORS(app)

config = {
    "url" : os.getenv("ES_URI", "http://localhost"),
    "port" : os.getenv("ES_PORT ", "9200")
}


index = Index(config)

@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    return response

@app.route('/', methods=['GET', 'POST'])
def catch_all():
    return app.send_static_file("index.html")

@app.route('/detail/<id>')
def detail(id):
    return app.send_static_file("index.html")

@app.route("/facet", methods=['POST', 'GET'])
def get_facet():
    struc = request.get_json()
    ret_struc = index.get_facet(struc["name"], struc["amount"], struc["filter"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/browse",  methods=['POST', 'GET'])
def browse():
    struc = request.get_json()
    ret_struc = index.browse(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/browse_person",  methods=['POST', 'GET'])
def browse_persons():
    struc = request.get_json()
    ret_struc = index.browse_persons(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/browse_aanstelling",  methods=['POST', 'GET'])
def browse_letters():
    struc = request.get_json()
    ret_struc = index.browse_aanstelling(struc["page"], struc["page_length"], struc["searchvalues"])
    return jsonify(ret_struc)

@app.route("/get_instelling_detail/<id>", methods=['GET'])
def get_location_detail(id):
    ret_struc = index.get_instelling_details(id)
    return jsonify(ret_struc)

@app.route("/get_person_detail/<id>", methods=['GET'])
def get_person_detail(id):
    ret_struc = index.get_person_details(id)
    return jsonify(ret_struc)

#Start main program

if __name__ == '__main__':
    app.run()

