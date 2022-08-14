import mysql.connector
from config_users_database import USER, PASSWORD, HOST
import re


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


""" VERIFICATION OF NEW USER FORMAT (Email and password fits format) """


def verify_email(email):
    email_pattern = "^[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+\.[a-z.]{1,5}$"

    return True if re.match(email_pattern, email) else False


def verify_password(password):
    permissable_characters = [letter for letter in "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+"]
    if len(password) < 8:
        return False
    for character in password:
        if character not in permissable_characters:
            return False
    return True


def verify_email_and_password(email_status, password_status):
    if email_status and password_status:
        return True
    if not email_status and password_status:
        return "Your email format is incorrect. Please check and try again."
    if email_status and not password_status:
        return "Your password does not fulfill the requirements. Please check and try again."
    else:
        return "Neither your email nor password fulfill the requirements. Please check and try again."

print(verify_email_and_password(True, False))
""" ADDING USER TO THE DATABASE """


def add_user(email, password):
    try:
        database_name = "user"
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

""" CHECKING USER LOGGING IN FUNCTIONS """


def retrieve_user(email):
    try:
        database_name = "user"
        database_con = _connect_to_db(database_name)
        cursor = database_con.cursor(buffered="True")
        query = f"""
        SELECT user_email, user_password FROM user_information WHERE user_email = "{email}";"""
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
    except Exception:
        raise DbConnectionError("Failed to read data from DB")
    finally:
        if database_con:
            database_con.close()
        return result





def check_user(result, password_check):
    if not result:
        return "This email address does not exist in our database. Please create an account."
    email, password = result[0]
    return "Sign-In Complete" if password == password_check else "Incorrect Password. Please try again."

