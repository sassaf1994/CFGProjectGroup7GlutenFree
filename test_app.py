
import unittest
from app import app
import json

#unittests to ensure flask app returning correct response
class Testhello(unittest.TestCase):
    
    def test_hello(self):
        with app.test_client() as c:
            resp = c.get("/")

            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.get_data(), b"Hello World!")
    
    def test_get_data(self):
        with app.test_client() as c:
            resp = c.get("recipes/chicken>")
            self.assertEqual(resp.status_code, 200)
    
    def test_get_recipe(self):
        with app.test_client() as c:
            resp = c.get("recipe/specific/369155da503838feadacadfea73f73ac")
            self.assertEqual(resp.status_code, 200)

    
if __name__=='__main__':
    unittest.main()

