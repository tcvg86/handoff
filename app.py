from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import mysql.connector

app = Flask(__name__)
CORS(app)


# Establish a connection to the MySQL database
@app.route('/get_entries', methods=['GET'])
@cross_origin(origin='*', headers=['Content- Type', 'Authorization'])
def get_entries():
    with mysql.connector.connect(
        host="localhost",
        user="root",
        database="handoffmock"
    ) as connection:
        # Create a cursor object inside the 'with' block
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM entries")
            entries = cursor.fetchall()

            entries_list = []
            for entry in entries:
                entry_dict = {
                    'id': entry[0],
                    'dallas': entry[1],
                    'houston': entry[2],
                    'san_antonio': entry[3],
                    'entry_datetime': entry[4].isoformat() if entry[4] else None
                }
                entries_list.append(entry_dict)

    # 'with' statement automatically closes cursor and connection

    return jsonify(entries_list)


if __name__ == '__main__':
    app.run(debug=True)
