from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)
CORS(app)


@app.route('/get_cities', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def get_cities():
    with mysql.connector.connect(
        host="localhost",
        user="root",
        database="handoffmock"
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
        host="localhost",
        user="root",
        database="handoffmock"
    ) as connection:
        # Create a cursor object inside the 'with' block
        with connection.cursor() as cursor:
            cursor.execute('''
            select ent.id, mkt.city, ent.entry, ent.date from entries ent join markets mkt on mkt.id = ent.market_id
            ''')
            entries = cursor.fetchall()

            entries_list = []
            for entry in entries:
                entry_dict = {
                    'id': entry[0],
                    'city': entry[1],
                    'entry': entry[2],
                    'date': entry[3].isoformat() if entry[3] else None
                }
                entries_list.append(entry_dict)

    # 'with' statement automatically closes cursor and connection

    return jsonify(entries_list)


@app.route('/save_entry', methods=['POST'])
@cross_origin(origins='*', headers=['Content-Type', 'Authorization'])
def save_entry():
    print('Route successful')


if __name__ == '__main__':
    app.run(debug=True)
