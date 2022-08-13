import unittest
from unittest.mock import patch
import requests
import sys

sys.path.insert(0, '../')
from api_utils import recipe_search, specific_recipe_search, api_call, specific_api_call, name_of_recipes, \
    ingredients_of_recipes, retrieve_id
from api_utils import recipe_url_of_recipes, source_of_recipes, images_url_of_recipes, nutrition_recipes, \
    compile_list_of_results, compile_single_result
from response import response as sample_response, expected_compilation_of_response
from response2 import response2 as sample_response_2
from response3 import response3 as sample_response_3, expected_compilation_of_response_3


class TestRequests(unittest.TestCase):

    def test_api_call(self):
        result = api_call("chicken", "gluten-free").status_code
        expected = 200
        self.assertEqual(expected, result)

    @patch('api_utils.requests.get')
    def test_recipe_search_status(self, mock_get):
        mock_get.json.return_value = sample_response_2
        request_json = requests.get().json()
        expected = request_json["hits"]
        result = recipe_search("chicken", "gluten-free")
        self.assertEqual(expected, result)

    def test_specific_recipe_search(self):
        result = specific_api_call("0f23ddc24c6f7889bda3347826884d9e").status_code
        expected = 200
        self.assertEqual(expected, result)

    @patch('api_utils.requests.get')
    def test_recipe_search(self, mock_get):
        mock_get.json.return_value = sample_response_3
        expected = requests.get().json()
        result = specific_recipe_search("0f23ddc24c6f7889bda3347826884d9e")
        self.assertEqual(expected, result)


class TestParsingFunctions(unittest.TestCase):

    def test_name_of_recipes(self):
        expected = ['Chicken, Onion, and Raisin Stew']
        initial_list = name_of_recipes(sample_response)
        result = initial_list[0:1]
        self.assertEqual(expected, result)

    def test_ingredients_of_recipes(self):
        initial_list = ingredients_of_recipes(sample_response)
        expected_part_one = initial_list[0][:2]
        expected_part_two = initial_list[1][:2]
        result_part_one = ['1/2 cup raisins or dried currants', '3 tablespoons red wine vinegar']
        result_part_two = ['2 lemons', '6 baby artichokes']
        self.assertEqual(expected_part_one, result_part_one)
        self.assertEqual(expected_part_two, result_part_two)

    def test_recipe_url_of_recipes(self):
        expected = ['https://www.epicurious.com/recipes/food/views/chicken-onion-and-raisin-stew-106484']
        initial_list = recipe_url_of_recipes(sample_response)
        first_element_result = initial_list[:1]
        self.assertEqual(first_element_result, expected)

    def test_images_url_of_recipes(self):
        expected = [
            "https://edamam-product-images.s3.amazonaws.com/web-img/ae5/ae521a0e40b45c8cf64c143ad6a10ffd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD7d5xgAEOCoRFpF3dD3heTcbWkn8ul9nrN5XypsViwygIgKxKybwl%2BR6FX69ztfPSVR%2BbuB35H1%2FVxU4TT1ZZjSr8q0gQIGhAAGgwxODcwMTcxNTA5ODYiDNlN%2FEttWUq2zCgUsSqvBLWkLavi1hei80Zqted3Qc4f1j2075b9VxWApBVmCEXh90eIpW%2B0i16Az8v%2FVjCJV8cZ8%2FR8Uf6UR3uHitBFGqH13iQ1FMXconUZZEVKwSnChhh3B6TBqmSDW5lU6sAC7pBz596tH2M0mnvHVwZVBKs4lOmTNM8FcVflAYD%2FwZj8Gnc1Qj101tCk%2Fds2IeGwO2OmYv97ZS2IT%2BdI3%2FLk43kkQYCCE6Ga3innDtPPOZeg3BNPdTtP6MA4tZ4T%2BrDIJy%2Bnd0z8BWHUgA307%2Fb4ZrEELBCsphr8qGqBE5xz1M7EtvgearC0fgsspnrrvnH%2BZseha0wKBz9NC3O5BeXB5v2iEA8TvCWZq2H9W3IEb7CwBl8mjwJFpoO%2B19tN6WZJPyMZfZofWVxoCjUITJUUPuwLWvqUtVAfXm%2By18J%2FTlLT4kuKWCyeesjfnO%2Fz7Wx5iFmJTehIFtnW3AeBFfUzP844hyq6vww2UrFAL%2BrGMgbepOyItT5mvdpTu1OKDNQapdhoGu7ICGwa04xFciK65LphX4E6eXY3O45ckuMsyAmgAgwcFta1axDV2XkW2Pg6%2B4IiWIHnCFZedtPGTrq9ryCNOA1e8vA6QsZfTBqSVyKvZfox6N%2BA56O9Erjn0i6trXvBNzoWx4ks%2BGcPp1Pn%2B1RdNPxF5yMjvf2yWTeqioJHaB%2Fy%2F8SaBhDrTEQbhUKrYOLi6Rgo0SL8%2BuwZ4Gk7Zw3rRmbE26qRrOQj27AKFJcw5MzblgY6qQHi5%2Bc6zn%2F2AgCqQZxHxbhNyWJALKu2WWOBqa7NRQ2Mh4FZT%2FWGggjlex%2FPIf%2FQYpAsTzsYUEyHosO1EOUebvL0Hc8tJ6P4lEg0jMwHfb9ODFrsb8WnlrtR8ihdto5DJZfGtNIyDnwehjYafbuClqKIBieFCBiKMQOqzwPiqxAZQe4JOmxZy4f35iIFqQZeMHOF5f%2BztLp3rwwk53sqM7cpKplVOrc2XXkp&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220719T173040Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKRU6CE4X%2F20220719%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe147c2a753b3f5a7fee107d748035c83717b6f53da98916f29884e0bb26e701"]
        initial_list = images_url_of_recipes(sample_response)
        first_element_result = initial_list[:1]
        self.assertEqual(first_element_result, expected)

    def test_source_of_recipes(self):
        expected = ['Epicurious']
        initial_list = source_of_recipes(sample_response)
        first_element_result = initial_list[:1]
        self.assertEqual(first_element_result, expected)

    def test_retrieve_id(self):
        expected = ["0f23ddc24c6f7889bda3347826884d9e"]
        initial_list = retrieve_id(sample_response)
        first_element_result = initial_list[:1]
        self.assertEqual(first_element_result, expected)

    def test_nutrition_recipes(self):
        expected = ["6029kcal"]
        initial_list = nutrition_recipes(sample_response, "ENERC_KCAL")
        first_element_result = initial_list[:1]
        self.assertEqual(first_element_result, expected)


class TestCompilingFunctions(unittest.TestCase):

    def test_compile_list_of_results(self):
        expected = expected_compilation_of_response
        result = compile_list_of_results(sample_response)
        self.assertEqual(result, expected)

    def test_compile_single_result(self):
        expected = expected_compilation_of_response_3
        result = compile_single_result(sample_response_3)
        self.assertEqual(result, expected)


if __name__ == '__main__':
    unittest.main()



