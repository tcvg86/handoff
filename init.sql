-- create la table
CREATE TABLE markets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(40)
);

-- market inserts
INSERT INTO markets (city)
VALUES
  ('Houston'),
  ('San Antonio'),
  ('Dallas'),
  ('Austin'),
  ('Fort Worth'),
  ('El Paso'),
  ('Arlington'),
  ('Corpus Christi'),
  ('Plano'),
  ('Laredo'),
  ('Lubbock'),
  ('Garland'),
  ('Irving'),
  ('Amarillo'),
  ('Grand Prairie'),
  ('McKinney'),
  ('Frisco'),
  ('Brownsville'),
  ('Pasadena'),
  ('Mesquite'),
  ('Waxahachie');

-- create table for entries
CREATE TABLE entries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  market_id INT,
  priority INT,
  entry TEXT,
  name VARCHAR(75),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create random entries
INSERT INTO entries (market_id, priority, entry, name, date)
VALUES
  (3, 1, 'Latest sales trends in Dallas.', 'Bob Johnson', '2024-02-09 14:56:12'),
  (7, 2, 'Arlington sales news roundup.', 'David Taylor', '2024-02-09 18:40:17'),
  (1, 1, 'Market update for sales in Houston.', 'John Doe', '2024-02-09 12:34:56'),
  (6, 2, 'El Paso market insights.', 'Sarah Wilson', '2024-02-09 17:29:03'),
  (4, 1, 'Austin market sales report.', 'Emily Davis', '2024-02-09 15:07:45'),
  (9, 3, 'Sales updates for Plano.', 'Chris Anderson', '2024-02-09 20:02:15'),
  (5, 1, 'Fort Worth sales update.', 'Michael Miller', '2024-02-09 16:18:29'),
  (2, 2, 'Sales news update for San Antonio.', 'Jane Smith', '2024-02-09 13:45:30'),
  (10, 1, 'Laredo market report.', 'Jessica Brown', '2024-02-09 21:13:59'),
  (8, 1, 'Corpus Christi market sales overview.', 'Laura Martinez', '2024-02-09 19:51:42');

-- create table for users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  username VARCHAR (10)
);

-- insert query for users
INSERT INTO users (first_name, last_name, username)
VALUES
  ('Bob', 'Johnson', 'johnbob'),
  ('David', 'Taylor', 'tayldav'),
  ('John', 'Doe', 'doejohn'),
  ('Sarah', 'Wilson', 'wilssar'),
  ('Emily', 'Davis', 'daviemi'),
  ('Chris', 'Anderson', 'andechr'),
  ('Michael', 'Miller', 'millmic'),
  ('Jane', 'Smith', 'smitjan'),
  ('Jessica', 'Brown', 'browjes'),
  ('Laura', 'Martinez', 'martlau'),
  ('Anthony', 'Griggs', 'grigant');
