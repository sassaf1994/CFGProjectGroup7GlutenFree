from flask import Flask, jsonify, request
from flask_cors import CORS
from api_utils import recipe_search, compile_list_of_results, specific_recipe_search, compile_single_result
from db_utils import insert_new_review, get_specific_review
from db_utils_user_database import add_user, check_user

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Hello World!"


# get a set of search results from a search
@app.route("/recipes/<query>", methods=["GET"])
def get_data(query):
    data = recipe_search(query, "gluten-free")
    data_to_send = compile_list_of_results(data)
    response = jsonify(data_to_send)
    return response


# get a specific result for a recipe
@app.route("/recipe/specific/<id>", methods=["GET"])
def get_recipe(id):
    data = specific_recipe_search(id)
    data_to_send = compile_single_result(data)
    response = jsonify(data_to_send)
    return response


# get a review for a multiple recipe
@app.route("/recipe/reviews", methods=["PUT"])
def get_reviews():
    recipe_ids = request.get_json()
    data_to_send = {}
    for i, j in recipe_ids.items():
        rating = get_specific_review(i, j)
        data_to_send[i] = rating
    return jsonify(data_to_send)


# post a rating for a specific recipe
@app.route("/recipe/post_review", methods=["PUT"])
def post_review():
    rating = request.get_json()
    for i, j in rating.items():
        insert_new_review(i,j)
    return jsonify(rating)


# add verification of email with @
@app.route("/user/add_user", methods=["POST"])
def add_user_api():
    user_to_add = request.get_json()
    for i, j in user_to_add.items():
        add_user(i,j)
    return "Account Created Successfully"


# to be completed
@app.route("/user/verify_user", methods=["GET"])
def verify_user():
    user_to_check = request.get_json()
    for i, j in user_to_check.items():
        outcome = check_user()
    return outcome









