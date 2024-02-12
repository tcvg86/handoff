from urllib import request

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import mysql.connector

app = Flask(__name__)
CORS(app)

# Get your secrets
with open('secrets/secrets.json') as secret_file:
    secrets = json.load(secret_file)

db_host = secrets['database']['host']
db_user = secrets['database']['username']
db_database = secrets['database']['database']


# get current user?

@app.route('/get_users', methods=['GET'])
def get_user():
  with mysql.connector.connect(
    host=db_host,
    user=db_user,
    database=db_database
  ) as connection:
    with connection.cursor() as cursor:
      cursor.execute('''
        SELECT concat(first_name, ' ', last_name) as name, username FROM users
      ''')
      users = cursor.fetchall()

      user_list = []

      for user in users:
        user_dict = {
          'name': user[0],
          'username': user[1]
        }
        user_list.append(user_dict)

  return jsonify(user_list)

@app.route('/get_cities', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_cities():
    with mysql.connector.connect(
        host=db_host,
        user=db_user,
        database=db_database
    ) as connection:
        # Create a cursor object inside the 'with' block
        with connection.cursor() as cursor:
            cursor.execute('''
            select * from markets
            ''')
            markets = cursor.fetchall()

            market_list = []
            for market in markets:
                entry_dict = {
                    'id': market[0],
                    'city': market[1],
                }
                market_list.append(entry_dict)

    # 'with' statement automatically closes cursor and connection

    return jsonify(market_list)


# Establish a connection to the MySQL database
@app.route('/get_entries', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_entries():
    with mysql.connector.connect(
        host=db_host,
        user=db_user,
        database=db_database
    ) as connection:
        # Create a cursor object inside the 'with' block
        with connection.cursor() as cursor:
            cursor.execute('''
            select ent.id, mkt.city, ent.name, ent.entry, ent.date, ent.priority from entries ent join markets mkt on mkt.id = ent.market_id
            ''')
            entries = cursor.fetchall()

            entries_list = []
            for entry in entries:
                entry_dict = {
                    'id': entry[0],
                    'city': entry[1],
                    'name': entry[2],
                    'entry': entry[3],
                    'date': entry[4].isoformat() if entry[4] else None,
                    'priority': entry[5]
                }
                entries_list.append(entry_dict)

    # 'with' statement automatically closes cursor and connection

    return jsonify(entries_list)


@app.route('/get_entry/<int:id>', methods=['GET'])
def get_entry(id):
    with mysql.connector.connect(
      host=db_host,
      user=db_user,
      database=db_database
    ) as connection:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute('''
              select * from entries
              where id = %s
            ''', (id,))
            entry = cursor.fetchone()

    if entry:
        return jsonify(entry)
    else:
        return jsonify({'error': 'Entry not found'}), 404


# update entry with id function goes here

@app.route('/save_entry', methods=['POST'])
def save_entry():
    try:
        data = request.get_json()

        name = data.get('name')
        city = data.get('market_id')
        priority = data.get('priority')
        entry = data.get('entry')

        connection = mysql.connector.connect(
            host=db_host,
            user=db_user,
            database=db_database
        )

        cursor = connection.cursor()

        # add priority to this later
        insert_query = f'''
            INSERT INTO entries (name, market_id, entry, priority) VALUES ('{name}', '{city}', '{entry}', '{priority}')
        '''
        cursor.execute(insert_query)

        # Commit the changes to the database
        connection.commit()

        cursor.close()

        connection.close()

        return jsonify({'message': 'Entry saved successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
