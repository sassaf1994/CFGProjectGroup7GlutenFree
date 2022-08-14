import requests
import re
import sys
sys.path.insert(0, '../tests/')


class HealthTypeError(ValueError):
    pass


class SearchError(ValueError):
    pass


class NutritionCategoryError(ValueError):
    pass


endpoint = "https://api.edamam.com/api/recipes/v2"

api_health_options = ["alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free",
                      "fodmap-free", "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher",
                      "low-potassium", "low-sugar", "lupine-free", "Mediterranean", "mollusk-free", "mustard-free",
                      "No-oil-added", "paleo", "peanut-free", "pecatarian", "pork-free", "red-meat-free", "sesame-free",
                      "shellfish-free", "soy-free", "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan",
                      "vegetarian", "wheat-free"]

api_nutrition_options = ["SUGAR.added","CA","CHOCDF.net","CHOCDF","CHOLE","ENERC_KCAL","FAMS","FAPU","FASAT","FATRN",
                         "FIBTG","FOLDFE","FOLFD","FOLAC","FE","MG","NIA","P","K","PROCNT","RIBF","NA","Sugar.alcohol",
                         "SUGAR","THIA","FAT","VITA_RAE","VITB12","VITB6A","VITC","VITD","TOCPHA","VITK1","WATER","ZN"]


def api_call(query: str, health: str) -> object:
    """Send a request to the Edemame API for a particular search query and health requirement"""

    payload = {"app_id": "2b855013",
               "app_key": '31c3d687bb811cf2472599ed3c033640',
               "type": "public",
               "q": query,
               "health": health
               }
    if health not in api_health_options:
        raise HealthTypeError("This health type is not an option for this API.")
    if not query.isalpha():
        raise SearchError("Searches must only contain letters of the alphabet")

    try:
        response = requests.get(endpoint, params=payload)
    except Exception:
        print(f"API request failed for {query},{health}")
    else:
        return response


def recipe_search(query: str, health: str) -> list:
    """Get the relevant information from the response sent to Edemame API"""

    response = api_call(query, health).json()
    return response["hits"]


def specific_api_call(id: str) -> object:
    """Send a request to the Edemame API for a specific recipe"""

    payload = {"app_id": "45bce103",
               "app_key": 'b326299fbd784be300f3868ece1e9de8',
               "type": "public",
               }
    endpoint_2 = f"{endpoint}/{id}"

    try:
        response = requests.get(endpoint_2, params=payload)
    except Exception:
        print(f"API request failed for {id}")
    else:
        return response


def specific_recipe_search(id: str) -> object:
    """Retrieve the response for a specific recipe from Edemame API"""

    response = specific_api_call(id).json()
    return response


def name_of_recipes(res: list) -> list:
    """Create a list of recipe names from a given response"""

    try:
        list_of_names = [recipe["recipe"]["label"] for recipe in res]
    except:
        print("Name of recipe not parsed successfully")
        return None
    else:
        return list_of_names


def ingredients_of_recipes(res: list) -> list:
    """Create a list of ingredients from a given response"""

    try:
        list_of_ingredients = [recipe["recipe"]["ingredientLines"] for recipe in res]
    except:
        print("List of ingredients not parsed successfully")
        return None
    else:
        return list_of_ingredients


def recipe_url_of_recipes(res: list) -> list:
    """Create a list of urls from a given response"""

    try:
        list_of_recipe_url = [recipe["recipe"]["url"] for recipe in res]
    except:
        print("List of recipe URLs not parsed successfully")
        return None
    else:
        return list_of_recipe_url


def source_of_recipes(res: list) -> list:
    """Create a list of recipe sources from a given response"""

    try:
        list_of_source_recipes = [recipe["recipe"]["source"] for recipe in res]
    except:
        print("List of recipe sources not parsed successfully")
        return None
    else:
        return list_of_source_recipes


def other_recipe_information(res: list, parameter: str) -> list:
    """Create a list of other parameters from a given response"""

    try:
        list_of_source_recipes = [recipe["recipe"][f"{parameter}"] for recipe in res]
    except Exception:
        print("Error in retrieving this category of information. Please check it exists and its format in the response.")
        return None
    else:
        return list_of_source_recipes


def images_url_of_recipes(res: list) -> list:
    """Create a list of image urls from a given response"""

    try:
        list_of_images_url = [recipe["recipe"]["images"]["SMALL"]["url"] for recipe in res]
    except Exception:
        print("List of image URLs  not parsed successfully.")
    else:
        return list_of_images_url


def retrieve_id(res: list) -> list:
    """Create a list of recipe IDs from a given response"""

    try:
        list_of_ids = []
        list_of_urls = [recipe["recipe"]["shareAs"] for recipe in res]
    except Exception:
        print("List of URLs not parsed successfully as part of ID retrieval")
        return None

    try:
        for i in list_of_urls:
            matched = re.search("\w{32}", i)
            list_of_ids.append(matched.group())
    except Exception:
        print("There was an error with parsing the ID number")
        return None
    else:
        return list_of_ids


def nutrition_recipes(res: list, nutritional_category: str) -> list:
    """Create a list of nutritional information from a given response, flexible around the type of nutritional info."""

    try:
        if nutritional_category not in api_nutrition_options:
            raise NutritionCategoryError("This nutrition category does not exist. Please review and refer to the types.")
        list_of_nutrition = [str(int(recipe["recipe"]["totalNutrients"][f"{nutritional_category}"]["quantity"]))
                         + recipe["recipe"]["totalNutrients"][f"{nutritional_category}"]["unit"] for recipe in res]
    except:
        print(f"Nutritional category f{nutritional_category} not parsed successfully.")
        return None
    else:
        return list_of_nutrition


def compile_list_of_results(data: list) -> list:
    """Compile relevant information for sending to the front end neatly and clearly"""

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
    list_of_servings = other_recipe_information(data, "yield")

    compiled_list_of_ingredients = []

    try:
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
            "Salt": list_of_salt[index],
            "Servings": list_of_servings[index]
                }
            compiled_list_of_ingredients.append(dictionary)
            index += 1
    except Exception:
        print("Error while compiling information for API")
        return None
    else:
        return compiled_list_of_ingredients


def compile_single_result(data: list) -> dict:
    """Compile relevant information for sending to the front end neatly and clearly for a single result"""

    try:
        recipe_url = data["recipe"]["shareAs"]
        matched = re.search("\w{32}", recipe_url)
        id_number = matched.group()
    except Exception:
        print("Error with parsing ID number")
        id_number = None
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
        "Servings": data["recipe"]["yield"]
    }
    return dictionary
