import requests
import re


endpoint = "https://api.edamam.com/api/recipes/v2"


"""FUNCTIONS FOR GETTING RESPONSE"""


def api_call(query, health):
    payload = {"app_id": "2b855013",
               "app_key": '31c3d687bb811cf2472599ed3c033640',
               "type": "public",
               "q": query,
               "health": health
               }

    response = requests.get(endpoint, params=payload)
    return response


def recipe_search(query, health):
    response = api_call(query, health).json()
    return response["hits"]


def specific_api_call(id):
    payload = {"app_id": "45bce103",
               "app_key": 'b326299fbd784be300f3868ece1e9de8',
               "type": "public",
               }
    endpoint_2 = f"{endpoint}/{id}"
    response = requests.get(endpoint_2, params=payload)
    return response


def specific_recipe_search(id):
    response = specific_api_call(id).json()
    return response

""" FUNCTIONS FOR GETTING GENERAL INFORMATION FROM RESPONSE """


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
        matched = re.search("\w{32}", i)
        list_of_ids.append(matched.group())
    return list_of_ids


""" FUNCTIONS FOR GETTING NUTRITIONAL INFORMATION FROM RESPONSE """


def nutrition_recipes(res, nutritional_category):
    list_of_nutrition = [str(int(recipe["recipe"]["totalNutrients"][f"{nutritional_category}"]["quantity"])) + recipe["recipe"]["totalNutrients"][f"{nutritional_category}"]["unit"] for recipe in res]
    return list_of_nutrition


""" FUNCTIONS FOR COMPILING DATA TO SEND NEATLY TO FRONT END """


def compile_list_of_results(data):
    index = 0
    list_of_names = name_of_recipes(data)
    list_of_sources = source_of_recipes(data)
    list_of_recipe_url = recipe_url_of_recipes(data)
    list_of_ingredients = ingredients_of_recipes(data)
    list_of_image_url = images_url_of_recipes(data)
    list_of_id = retrieve_id(data)
    list_of_calories = nutrition_recipes(data, "ENERC_KCAL")
    list_of_total_fat = nutrition_recipes(data, "FAT")
    list_of_sat_fat = nutrition_recipes(data, "FASAT")
    list_of_mono_fat = nutrition_recipes(data, "FAMS")
    list_of_poly_fat = nutrition_recipes(data,"FAPU")
    list_of_total_carbs = nutrition_recipes(data,"CHOCDF")
    list_of_net_carbs = nutrition_recipes(data,"CHOCDF.net")
    list_of_fibre = nutrition_recipes(data,"FIBTG")
    list_of_sugar = nutrition_recipes(data,"SUGAR")
    list_of_protein = nutrition_recipes(data,"PROCNT")
    list_of_salt = nutrition_recipes(data, "NA")

    compiled_list_of_ingredients = []

    while index < len(name_of_recipes(data)):
        dictionary = {
            "Name": list_of_names[index],
            "Source": list_of_sources[index],
            "Recipe URL": list_of_recipe_url[index],
            "Ingredients": list_of_ingredients[index],
            "Image URL": list_of_image_url[index],
            "Recipe ID": list_of_id[index],
            "Calories": list_of_calories[index],
            "Total Fat": list_of_total_fat[index],
            "Mono Fat": list_of_mono_fat[index],
            "Poly Fat": list_of_poly_fat[index],
            "Sat Fat": list_of_sat_fat[index],
            "Total Carbs": list_of_total_carbs[index],
            "Net Carbs": list_of_net_carbs[index],
            "Carbs which Sugar": list_of_sugar[index],
            "Fibre": list_of_fibre[index],
            "Protein": list_of_protein[index],
            "Salt": list_of_salt[index]
                }
        compiled_list_of_ingredients.append(dictionary)
        index += 1
    return compiled_list_of_ingredients


def compile_single_result(data):
    recipe_url = data["recipe"]["shareAs"]
    matched = re.search("\w{32}", recipe_url) # needs to be looked at by Sarah
    id_number = matched.group()
    dictionary = {
        "Name": data["recipe"]["label"],
        "Source": data["recipe"]["source"],
        "Recipe URL": data["recipe"]["url"],
        "Ingredients": data["recipe"]["ingredientLines"],
        "Image URL": data["recipe"]["images"]["SMALL"]["url"],
        "Recipe ID": id_number,
        "Calories": str(int(data["recipe"]["totalNutrients"]["ENERC_KCAL"]["quantity"])) + data["recipe"]["totalNutrients"]["ENERC_KCAL"]["unit"],
        "Total Fat": str(int(data["recipe"]["totalNutrients"]["FAT"]["quantity"])) + data["recipe"]["totalNutrients"]["FAT"]["unit"],
        "Mono Fat": str(int(data["recipe"]["totalNutrients"]["FAMS"]["quantity"])) + data["recipe"]["totalNutrients"]["FAMS"]["unit"],
        "Poly Fat": str(int(data["recipe"]["totalNutrients"]["FAPU"]["quantity"])) + data["recipe"]["totalNutrients"]["FAPU"]["unit"],
        "Sat Fat": str(int(data["recipe"]["totalNutrients"]["FASAT"]["quantity"])) + data["recipe"]["totalNutrients"]["FASAT"]["unit"],
        "Total Carbs": str(int(data["recipe"]["totalNutrients"]["CHOCDF"]["quantity"])) + data["recipe"]["totalNutrients"]["CHOCDF"]["unit"],
        "Net Carbs": str(int(data["recipe"]["totalNutrients"]["CHOCDF.net"]["quantity"])) + data["recipe"]["totalNutrients"]["CHOCDF.net"]["unit"],
        "Carbs which Sugar": str(int(data["recipe"]["totalNutrients"]["SUGAR"]["quantity"])) + data["recipe"]["totalNutrients"]["SUGAR"]["unit"],
        "Fibre": str(int(data["recipe"]["totalNutrients"]["FIBTG"]["quantity"])) + data["recipe"]["totalNutrients"]["FIBTG"]["unit"],
        "Protein": str(int(data["recipe"]["totalNutrients"]["PROCNT"]["quantity"])) + data["recipe"]["totalNutrients"]["PROCNT"]["unit"],
        "Salt": str(int(data["recipe"]["totalNutrients"]["NA"]["quantity"])) + data["recipe"]["totalNutrients"]["NA"]["unit"],
    }
    return dictionary
