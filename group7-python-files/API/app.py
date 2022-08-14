from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
sys.path.insert(0, '../API/utilities_and_config')

from api_utils import recipe_search, compile_list_of_results, specific_recipe_search, compile_single_result
from db_utils_reviews_database import insert_new_review, get_specific_review
from db_utils_user_database import add_user, retrieve_user, verify_email_and_password, verify_password, verify_email, check_user

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


# add a new user
@app.route("/user/add_user", methods=["POST"])
def add_user_api():
    user_to_add = request.get_json()
    for email, password in user_to_add.items():
        check_not_already_user = retrieve_user(email)
        if len(check_not_already_user) > 0:
            return "This Account Already Exists"
        email_status = verify_email(email)
        password_status = verify_password(password)
        overall_status = verify_email_and_password(email_status, password_status)
        if overall_status is True:
            add_user(email, password)
            return "Account Created Successfully"
        return overall_status


# login a user
@app.route("/user/verify_user", methods=["GET"])
def verify_user():
    user_to_check = request.get_json()
    for email, password in user_to_check.items():
        retrieved_user = retrieve_user(email)
        status = check_user(retrieved_user, password)
    return status









