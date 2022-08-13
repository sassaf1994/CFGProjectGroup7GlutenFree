import mysql.connector
from config import USER, PASSWORD, HOST


class DbConnectionError(Exception):
    pass


def _connect_to_db(database_name):
    connection = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        auth_plugin='mysql_native_password',
        database=database_name
    )
    return connection


def add_user(email, password):
    try:
        database_name = "users"
        database_con = _connect_to_db(database_name)
        cursor = database_con.cursor(buffered="True")
        query = f"""
        INSERT INTO user_information (user_email, user_password) VALUES ("{email}", "{password}");"""
        cursor.execute(query)
        result = cursor.fetchall()
        database_con.commit()
        cursor.close()
    except Exception:
        raise DbConnectionError("Failed to read data from DB")
    finally:
        if database_con:
            database_con.close()

# to be completed - check the result of the query
def check_user(email, password):
    try:
        database_name = "users"
        database_con = _connect_to_db(database_name)
        cursor = database_con.cursor(buffered="True")
        query = f"""
        SELECT user_email, user_password FROM user_information WHERE user_email = "{email};"""
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
    except Exception:
        raise DbConnectionError("Failed to read data from DB")
    finally:
        if database_con:
            database_con.close()
