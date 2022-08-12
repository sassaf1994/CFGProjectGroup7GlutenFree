
import unittest
from api_utils import recipe_search, name_of_recipes, ingredients_of_recipes,  retrieve_id
from api_utils import recipe_url_of_recipes, source_of_recipes
import json
import requests
from unittest.mock import patch
from response import response as sample_response


class Testrecipesearch(unittest.TestCase):
    
    @patch('api_utils.requests.get')  
    def test_recipe_search(self, mock_get):
        mock_get.return_value.status_code = 200 
        response = requests.get()
        self.assertEqual(response.status_code, 200)

    
    def test_name_of_recipes(self):
        ret = name_of_recipes(sample_response)
        self.assertEqual(ret[0:2], ['Chicken, Onion, and Raisin Stew', 'Braised Artichokes With Onion, Olives & Thyme'])

    def test_ingredients_of_recipes(self):
        ret = ingredients_of_recipes(sample_response)
        self.assertEqual(ret[0][0:2], ['1/2 cup raisins or dried currants','3 tablespoons red wine vinegar'])
        self.assertEqual(ret[1][0:2], ['2 lemons', '6 baby artichokes'])
    
    def test_recipe_url_of_recipes(self):
        ret = recipe_url_of_recipes(sample_response)
        self.assertEqual(ret[0:1], ['https://www.epicurious.com/recipes/food/views/chicken-onion-and-raisin-stew-106484'])
    
    def test_source_of_recipes(self):
        ret = source_of_recipes(sample_response)
        self.assertEqual(ret[0:1],['Epicurious'])

   
         
if __name__=='__main__':
    unittest.main()

def test():
    data= retrieve_id(sample_response)
    print(data)


