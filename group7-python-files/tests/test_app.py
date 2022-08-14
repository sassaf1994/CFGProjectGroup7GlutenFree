import unittest
import sys

sys.path.insert(0, '../API/')
from app import app


class TestRoot(unittest.TestCase):

    def test_hello(self):
        with app.test_client() as c:
            resp = c.get("/")

            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.get_data(), b"Hello World!")


class TestRecipeData(unittest.TestCase):

    def test_get_data(self):
        with app.test_client() as c:
            resp = c.get("recipes/chicken")
            self.assertEqual(resp.status_code, 200)

    def test_get_recipe(self):
        with app.test_client() as c:
            resp = c.get("recipe/specific/0f23ddc24c6f7889bda3347826884d9e")
            self.assertEqual(resp.status_code, 200)


class TestReviewData(unittest.TestCase):

    def test_get_review(self):
        with app.test_client() as c:
            data = {"1": "chicken soup"}
            resp = c.put("recipe/reviews", json=data)
            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.get_data(), b'{"1":0}\n')

    def test_post_review(self):
        with app.test_client() as c:
            data = {"1234": 4}
            resp = c.put("recipe/post_review", json=data)
            self.assertEqual(resp.status_code, 200)
            self.assertEqual(resp.get_data(), b'{"1234":4}\n')


if __name__ == '__main__':
    unittest.main()

