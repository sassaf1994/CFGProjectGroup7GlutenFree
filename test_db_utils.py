import unittest
import mysql.connector
from config import USER, PASSWORD, HOST
from db_utils import get_specific_review

#unittest to check DB connection will pick up if username, password is incorrect to connect to DB

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

    def test_connection(self):
        self.assertTrue(self.connection.is_connected())
        
    def test_get_specific_review(self):
        ret = get_specific_review('1', 'test review')
        self.assertEqual(ret, 0 )

if __name__ == '__main__':
    unittest.main()
