import requests
import re
from pprint import pprint as pp

endpoint = "https://api.edamam.com/api/recipes/v2"


def recipe_search(query, health):
    payload = {"app_id": "45bce103",
               "app_key": 'b326299fbd784be300f3868ece1e9de8',
               "type": "public",
               "q": query,
               "health": health
               }

    response = requests.get(endpoint, params=payload).json()
    return response["hits"]


def specific_recipe_search(id):
    payload = {"app_id": "45bce103",
               "app_key": 'b326299fbd784be300f3868ece1e9de8',
               "type": "public",
               }
    endpoint_2 = f"{endpoint}/{id}"
    response = requests.get(endpoint_2, params=payload).json()
    return response


def name_of_recipes(res):
    list_of_names = [recipe["recipe"]["label"] for recipe in res]
    return list_of_names


def ingredients_of_recipes(res):
    list_of_ingredients = [recipe["recipe"]["ingredientLines"] for recipe in res]
    return list_of_ingredients


def images_url_of_recipes(res):
    list_of_images_url = [recipe["recipe"]["images"]["SMALL"]["url"] for recipe in res]
    return list_of_images_url


def recipe_url_of_recipes(res):
    list_of_recipe_url = [recipe["recipe"]["url"] for recipe in res]
    return list_of_recipe_url


def source_of_recipes(res):
    list_of_source_recipes = [recipe["recipe"]["source"] for recipe in res]
    return list_of_source_recipes


def retrieve_id(res):
    list_of_ids = []
    list_of_urls = [recipe["recipe"]["shareAs"] for recipe in res]
    for i in list_of_urls:
        matched = re.search("\d+\w+", i)
        list_of_ids.append(matched.group())
    return list_of_ids


def compile_list_of_results(data):
    index = 0
    list_of_names = name_of_recipes(data)
    list_of_sources = source_of_recipes(data)
    list_of_recipe_url = recipe_url_of_recipes(data)
    list_of_ingredients = ingredients_of_recipes(data)
    list_of_image_url = images_url_of_recipes(data)
    list_of_id = retrieve_id(data)
    compiled_list_of_ingredients = []

    while index < len(name_of_recipes(data)):
        dictionary = {
            "Name": list_of_names[index],
            "Source": list_of_sources[index],
            "Recipe URL": list_of_recipe_url[index],
            "Ingredients": list_of_ingredients[index],
            "Image URL": list_of_image_url[index],
            "Recipe ID": list_of_id[index]
                }
        compiled_list_of_ingredients.append(dictionary)
        index += 1
    return compiled_list_of_ingredients


def compile_single_result(data):
    recipe_url = data["recipe"]["shareAs"]
    matched = re.search("\d+\w+", recipe_url)
    id_number = matched.group()
    dictionary = {
        "Name": data["recipe"]["label"],
        "Source": data["recipe"]["source"],
        "Recipe URL": data["recipe"]["url"],
        "Ingredients": data["recipe"]["ingredientLines"],
        "Image URL": data["recipe"]["images"]["SMALL"]["url"],
        "Recipe ID": id_number
    }
    return dictionary


