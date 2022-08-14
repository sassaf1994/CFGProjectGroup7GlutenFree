import mysql.connector
from config_reviews_database import USER, PASSWORD, HOST


# Error handling if not connecting to DB(eg password wrong)
class DbConnectionError(Exception):
    pass


# connect to the DB
def _connect_to_db(database_name):
    connection = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        auth_plugin='mysql_native_password',
        database=database_name
    )
    return connection


# get a review
def get_specific_review(food_id, food_name):
    try:
        database_name = "reviews"
        database_con = _connect_to_db(database_name)
        cursor = database_con.cursor(buffered="True")
        query = """
            SELECT retrieve_rating4("{id}","{name}")
            """.format(id=food_id, name=food_name)
        cursor.execute(query)
        result = cursor.fetchall()
        database_con.commit()
        cursor.close()
    except Exception:
        raise DbConnectionError("Failed to read data from DB")
    finally:
        if database_con:
            database_con.close()
    try:
        return float(result[0][0])
    except TypeError:
        return 0


# To add a review
def insert_new_review(food_id, rating):
    try:
        database_name = "reviews"
        database_connection = _connect_to_db(database_name)
        cursor = database_connection.cursor(buffered=True)
        query = f"""SELECT update_rating("{food_id}",{rating})"""
        cursor.execute(query)
        database_connection.commit()
        cursor.close()
    except Exception:
        raise DbConnectionError("Failed to read data from DB")
    finally:
        if database_connection:
            database_connection.close()
    return rating
