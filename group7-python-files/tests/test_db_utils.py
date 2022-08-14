import unittest
from unittest.mock import patch
import mysql.connector
import sys

sys.path.insert(0, '../API/')
from config import USER, PASSWORD, HOST
from db_utils import get_specific_review, insert_new_review


# unittest to check DB connection will pick up if username, password is incorrect to connect to DB


class TestConnection(unittest.TestCase):
    connection = None

    def setUp(self):
        self.connection = mysql.connector.connect(
            host=HOST,
            user=USER,
            password=PASSWORD,
            auth_plugin='mysql_native_password',
            database='reviews'
        )

    def tearDown(self):
        if self.connection is not None and self.connection.is_connected():
            self.connection.close()

    def test_connection_true(self):
        self.assertTrue(self.connection.is_connected())

    def test_get_specific_review(self):
        response = get_specific_review('1', 'test review')
        self.assertEqual(response, 0)

    def test_insert_new_review(self):
        response = insert_new_review('1234', 4)
        self.assertEqual(response, 4)


if __name__ == '__main__':
    unittest.main()
